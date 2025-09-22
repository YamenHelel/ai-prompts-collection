#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOTS = ['prompts', 'prompts_ar'];
const outputFile = 'web/prompts-index.json';

function walkDirectory(dirPath, basePath = '') {
  const prompts = [];
  
  if (!fs.existsSync(dirPath)) {
    return prompts;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      prompts.push(...walkDirectory(fullPath, relativePath));
    } else if (entry.name.endsWith('.md')) {
      try {
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const parsed = matter(fileContent);
        
        if (parsed.data && Object.keys(parsed.data).length > 0) {
          prompts.push({
            ...parsed.data,
            content: parsed.content,
            filePath: relativePath,
            category: basePath.split('/')[0] || basePath.split('\\')[0] || 'uncategorized',
            subcategory: basePath.split('/').slice(1).join('/') || basePath.split('\\').slice(1).join('\\') || null
          });
        }
      } catch (error) {
        console.error(`Error processing ${relativePath}:`, error.message);
      }
    }
  }
  
  return prompts;
}

function buildIndex() {
  console.log('🔍 Building prompts index...');
  
  let allPrompts = [];
  
  for (const root of ROOTS) {
    const prompts = walkDirectory(root);
    allPrompts.push(...prompts);
  }
  
  // Sort prompts by category and title
  allPrompts.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.title.localeCompare(b.title);
  });
  
  // Create categories structure
  const categories = {};
  allPrompts.forEach(prompt => {
    if (!categories[prompt.category]) {
      categories[prompt.category] = {
        name: prompt.category,
        count: 0,
        prompts: []
      };
    }
    categories[prompt.category].prompts.push(prompt);
    categories[prompt.category].count++;
  });
  
  const index = {
    metadata: {
      totalPrompts: allPrompts.length,
      categories: Object.keys(categories).length,
      lastUpdated: new Date().toISOString(),
      version: '1.0'
    },
    categories: categories,
    allPrompts: allPrompts
  };
  
  // Ensure web directory exists
  if (!fs.existsSync('web')) {
    fs.mkdirSync('web', { recursive: true });
  }
  
  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
  
  console.log(`✅ Built index with ${allPrompts.length} prompts in ${Object.keys(categories).length} categories`);
  console.log(`📁 Saved to: ${outputFile}`);
  
  // Display summary
  console.log('\n📊 Categories:');
  Object.entries(categories).forEach(([name, cat]) => {
    console.log(`  ${name}: ${cat.count} prompts`);
  });
}

buildIndex();
