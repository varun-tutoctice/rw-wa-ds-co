const fs = require('fs-extra');
const execSync = require('child_process').execSync;

fs.ensureDirSync('tmp');

console.error('BUILDING QAP');
execSync('npm run build:qap');
fs.copySync('dist/app/rewards-component.js', 'tmp/rewards-component-qap.js');

console.error('BUILDING STAGING');
execSync('npm run build:staging');
fs.copySync('dist/app/rewards-component.js', 'tmp/rewards-component-staging.js');

console.error('BUILDING PROD');
execSync('npm run build:prod');
fs.copySync('dist/app/rewards-component.js', 'tmp/rewards-component-production.js');

console.error('COPYING ASSETS');
fs.copySync('tmp', 'dist/app');

console.error('REMOVING UNWANTED ASSETS');
fs.removeSync('tmp');
fs.removeSync('dist/app/rewards-component.js');

console.error('ZIPPING ARTIFACT');
execSync('node ./scripts/build-artifact && node ./scripts/rename');

