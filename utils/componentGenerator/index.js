const minimist = require('minimist');
const fs = require('fs');
const path = require('path');
const { componentType, className } = minimist(process.argv.slice(2));
const componentTypes = ['component', 'container', ];
const componentPath = path.resolve(__dirname, '..', '..', 'src', `${componentType}s`, className);
const classNameLowerCase = className.charAt(0).toLowerCase() + className.slice(1);

// Component type validation.
if (componentTypes.indexOf(componentType) === -1) {
  console.error(`Component type "${componentType}" is not supported.`);
  
  return;
}

if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath);
}

const fileContent = {
  index: `export default from './${className}';\n`,
  component: fs.readFileSync(path.resolve(arguments[4], 'componentTemplate.jsx'), 'utf8'),
  scss: `.${classNameLowerCase} {\n\t\n}\n`,
}

const formattedFileContent = fileContent.component
  .replace(/\${ClassName}/g, className)
  .replace(/\${className}/g, classNameLowerCase);

fs.writeFileSync(
  path.resolve(componentPath, `${className}.jsx`),
  formattedFileContent,
  { flag: 'w' }
);

fs.writeFileSync(
  path.resolve(componentPath, `${className}.scss`),
  fileContent.scss,
  { flag: 'w' }
);

fs.writeFileSync(
  path.resolve(componentPath, 'index.js'),
  fileContent.index,
  { flag: 'w' }
);
