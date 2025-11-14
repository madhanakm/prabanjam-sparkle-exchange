#!/usr/bin/env node

// Simple script to switch environments
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const environment = args[0];

if (!environment || !['development', 'production'].includes(environment)) {
  console.log('Usage: node switch-env.js [development|production]');
  process.exit(1);
}

const configPath = path.join(__dirname, 'env-config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace the ENVIRONMENT line
configContent = configContent.replace(
  /const ENVIRONMENT = '[^']*';/,
  `const ENVIRONMENT = '${environment}';`
);

fs.writeFileSync(configPath, configContent);
console.log(`✅ Switched to ${environment} environment`);

if (environment === 'production') {
  console.log('📦 Run: npm run build && cd admin-panel && npm run build');
}