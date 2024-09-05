const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Regular expression to match variable and function names
const camelCaseRegex = /^[a-z][a-zA-Z0-9]*$/;

// Function to check if a name is in camelCase
function isCamelCase(name) {
  return camelCaseRegex.test(name);
}

// Function to check a single file
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const variableAndFunctionNames = [];

  // Regex to match variable and function declarations
  const regex = /\b(?:var|let|const|function|class|constructor)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\b/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    variableAndFunctionNames.push(match[1]);
  }

  // Check each name
  let errorFound = false;
  variableAndFunctionNames.forEach(name => {
    if (!isCamelCase(name)) {
      console.error(`Non-camelCase name found in ${filePath}: ${name}`);
      errorFound = true;
    }
  });

  return !errorFound;
}

// Main function to check all JS files under src folder
function checkFiles() {
  const jsFiles = glob.sync('src/**/*.js');
  let allFilesValid = true;

  jsFiles.forEach(file => {
    if (!checkFile(file)) {
      allFilesValid = false;
    }
  });

  return allFilesValid;
}

// Run the checker
const result = checkFiles();
if (!result) {
  process.exit(1);
}