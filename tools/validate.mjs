#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ROOTS = ['prompts', 'prompts_ar'];
const schemaPath = 'schema/prompt.schema.json';

// Check if schema file exists
if (!fs.existsSync(schemaPath)) {
  console.error(`❌ Schema file not found: ${schemaPath}`);
  process.exit(1);
}

// Load and parse schema
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Initialize Ajv with formats
const ajv = new Ajv({ 
  allErrors: true, 
  strict: false,
  verbose: true
});
addFormats(ajv);

const validate = ajv.compile(schema);

let failed = 0;
let processed = 0;

console.log('🔍 Validating prompts...\n');

// Function to recursively walk directories
function walkDirectory(dirPath, basePath = '') {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      walkDirectory(fullPath, relativePath);
    } else if (entry.name.endsWith('.md')) {
      processMarkdownFile(fullPath, relativePath);
    }
  }
}

// Function to process individual markdown files
function processMarkdownFile(filePath, relativePath) {
  try {
    processed++;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);
    
    // Check if file has front-matter
    if (!parsed.data || Object.keys(parsed.data).length === 0) {
      console.error(`❌ ${relativePath}: No front-matter found`);
      failed++;
      return;
    }
    
    // Validate front-matter against schema
    const isValid = validate(parsed.data);
    
    if (!isValid) {
      console.error(`❌ ${relativePath}: Validation failed`);
      console.error('   Errors:', JSON.stringify(validate.errors, null, 2));
      failed++;
    } else {
      console.log(`✅ ${relativePath}`);
    }
    
  } catch (error) {
    console.error(`❌ ${relativePath}: Error reading file - ${error.message}`);
    failed++;
  }
}

// Process all root directories
for (const root of ROOTS) {
  walkDirectory(root);
}

console.log(`\n📊 Validation Summary:`);
console.log(`   Processed: ${processed} files`);
console.log(`   Passed: ${processed - failed}`);
console.log(`   Failed: ${failed}`);

if (failed > 0) {
  console.log('\n❌ Validation failed. Please fix the errors above.');
  process.exit(1);
} else {
  console.log('\n✅ All prompts passed validation!');
}
