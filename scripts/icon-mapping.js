const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const directoryPath = './src';
const outputPath = '../core/src/utils';

let componentMapping = {}; // initialize an empty object

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Unable to scan directory: ' + err);
    return;
  } 
  files.forEach((file) => {
    const subDirectoryPath = path.join(directoryPath, file);
    if (fs.statSync(subDirectoryPath).isDirectory() && file !== 'styles') {
      const componentName = _.camelCase(file.replace('Icon', ''));
      componentMapping[componentName] = file;
    }
  });

  const mappingFilePath = path.join(outputPath, 'mapping.tsx');
  const fileContents = `
    import React from 'react';
    ${Object.values(componentMapping).map(value => `import ${value} from '@apg.gg/icons/lib/${value}';`).join('\n')}

    function getComponentByName(name: string, className: string) {
      switch (name) {
        ${Object.entries(componentMapping)
          .map(([key, value]) => {
            return `case "${key}": return <${value} className={className} />;`;
          })
          .join('\n')}
        default: return null;
      }
    }

    export default getComponentByName;
  `;
  fs.writeFile(mappingFilePath, fileContents, (err) => {
    if (err) {
      console.log('Error writing mapping file: ' + err);
      return;
    }
    console.log('Mapping file generated');
  });
});
