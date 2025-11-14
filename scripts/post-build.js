#!/usr/bin/env node
/**
 * Post-build script to convert absolute paths to relative paths in exported HTML.
 * This allows the static site to work correctly on custom domains without a basePath.
 * Converts /_next/ to ./_next/ and /albums/ to ./albums/, etc.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'out');

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate the relative path from this HTML file to the root of out/
    const relativeToRoot = path.relative(path.dirname(filePath), outDir);
    
    // Convert absolute paths to relative paths based on file depth
    // /_next/ → ../../_next/ (or ./  if at root)
    content = content.replace(/\/_next\//g, relativeToRoot ? `${relativeToRoot}/_next/` : './_next/');
    
    // /albums/ → ../../albums/ (or ./ if at root)
    content = content.replace(/\/albums\//g, relativeToRoot ? `${relativeToRoot}/albums/` : './albums/');
    
    // href="/ → href="./ (for home link)
    // But need to account for depth: href="/ at /albums/foo/ should be href="../../
    const depth = (filePath.match(/\\/g) || []).length - (outDir.match(/\\/g) || []).length - 1;
    if (depth > 0) {
      // At nested level, replace href="/ with href pointing to root
      const upPath = Array(depth).fill('..').join('/') + '/';
      content = content.replace(/href="\/(?!\/)/g, `href="${upPath}`);
    } else {
      // At root level
      content = content.replace(/href="\/(?!\/)/g, 'href="./');
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Processed: ${filePath}`);
  } catch (err) {
    console.error(`✗ Error processing ${filePath}:`, err.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process all directories, including _next
      if (file !== 'node_modules' && !file.startsWith('.')) {
        walkDir(filePath);
      }
    } else if (file.endsWith('.html')) {
      processFile(filePath);
    }
  });
}

console.log('Converting absolute paths to relative paths in exported HTML...');
walkDir(outDir);
console.log('Done!');
