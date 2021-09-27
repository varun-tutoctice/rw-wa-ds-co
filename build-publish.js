const fs = require('fs-extra');
const execSync = require('child_process').execSync;
const concat = require('concat');
const package = require('./package.json');
const publish = require('./publish.json');

(async function build() {
  const files = [
    './dist/build/runtime.min.js',
    './dist/build/main.min.js',
    './dist/build/polyfills.min.js',
  ];
  await fs.ensureDir('./dist/rewards-component');
  await fs.emptyDir('./dist/rewards-component');
  publish.version = package.version;
  publish.name = package.name;
  await fs.ensureDirSync('./dist/rewards-component/js');
  await fs.copy('./dist/build/', './dist/rewards-component/');
  await fs.copy('./readme-publish.md', './dist/rewards-component/README.md');
  await fs.copy('./src/styles', './dist/rewards-component');
  await fs.writeFile('./dist/rewards-component/package.json', JSON.stringify(publish));
  await concat(files, './dist/rewards-component/js/rewards-component.js');
  await fs.removeSync('./dist/rewards-component/rewards-component.js');
  await fs.removeSync('./dist/build');
  await fs.removeSync('./dist/app');
})();
