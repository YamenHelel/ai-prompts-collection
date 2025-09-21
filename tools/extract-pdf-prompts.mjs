#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

async function extractPromptsFromPDF(pdfPath) {
  try {
    console.log(`📖 Extracting prompts from: ${pdfPath}`);
    
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    
    console.log(`✅ Successfully extracted text from ${pdfPath}`);
    console.log(`📄 Text length: ${data.text.length} characters`);
    console.log(`📊 Pages: ${data.numpages}`);
    
    return data.text;
  } catch (error) {
    console.error(`❌ Error extracting from ${pdfPath}:`, error.message);
    return null;
  }
}

async function main() {
  const pdfFiles = [
    'Nano Banana Prompts.pdf',
    'REVE Prompts.pdf'
  ];
  
  console.log('🚀 Starting PDF prompt extraction...\n');
  
  for (const pdfFile of pdfFiles) {
    if (fs.existsSync(pdfFile)) {
      const text = await extractPromptsFromPDF(pdfFile);
      
      if (text) {
        // Save extracted text to a file for review
        const outputFile = pdfFile.replace('.pdf', '_extracted.txt');
        fs.writeFileSync(outputFile, text);
        console.log(`💾 Saved extracted text to: ${outputFile}\n`);
      }
    } else {
      console.log(`⚠️  PDF file not found: ${pdfFile}\n`);
    }
  }
  
  console.log('✨ PDF extraction complete!');
}

main().catch(console.error);
