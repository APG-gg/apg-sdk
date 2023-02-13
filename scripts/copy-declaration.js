const execSync = require('child_process').execSync;
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const copyDeclaration = async() => {
  const files = execSync('find lib -name *.d.ts').toString();
  const declarations = files.split('\n').filter((file) => file.indexOf('index.d.ts') === -1 && file.indexOf('/') !== -1);

  await declarations.forEach(async(filePath) => {
    const content = await readFile(filePath, 'utf8');
    const componentPath = filePath.split('/');
    await writeFile(`lib/${componentPath.pop()}`, content);
    console.log(`finished writing ${componentPath.pop()}`);
  });
};

copyDeclaration();