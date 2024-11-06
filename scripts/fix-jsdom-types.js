const fs = require('fs-extra');
const path = require('path');

/**
 * https://github.com/microsoft/vscode-jupyter/pull/7987/files
 */

/**
 * Fix compilation issues in jsdom files.
 */
function updateJSDomTypeDefinition() {
  let relativePath = path.join('node_modules', '@types', 'jsdom', 'base.d.ts');
  let filePath = path.join(process.cwd(), relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`JSdom base.d.ts not found ${filePath}`);
    return;
  }
  let fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });
  let replacedContents = fileContents.replace(
    /\s*globalThis: DOMWindow;\s*readonly \["Infinity"]: number;\s*readonly \["NaN"]: number;/g,
    [
      'globalThis: DOMWindow;',
      '// @ts-ignore',
      'readonly ["Infinity"]: number;',
      '// @ts-ignore',
      'readonly ["NaN"]: number;'
    ].join(`\n        `)
  );
  if (replacedContents === fileContents) {
    console.warn('JSdom base.d.ts not updated');
    return;
  }
  fs.writeFileSync(filePath, replacedContents);
}

updateJSDomTypeDefinition();
