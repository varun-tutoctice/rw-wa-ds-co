const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/build/runtime.min.js',
    './dist/build/main.min.js',
    './dist/build/polyfills.min.js',
  ];
  await fs.ensureDir('./dist/app');
  await fs.emptyDir('./dist/app');
  await fs.copy('./dist/build/', './dist/app/' );
  await concat(files, './dist/app/rewards-component.js');
})();


// const fs = require('fs-extra');
// const concat = require('concat');
// (async function build() {
// const files = [
// './dist/<PROJECT_NAME>/runtime.js',
// './dist/<PROJECT_NAME>/polyfills.js',
// './dist/<PROJECT_NAME>/scripts.js',
// './dist/<PROJECT_NAME>/main.js',
// ]
// await fs.ensureDir('elements')
// await concat(files, 'elements/analytics-counter.js');
// await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
// })()