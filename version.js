const fs = require('fs');
const path = require('path');
const version = require('./package.json').version;

console.info('version', version);

const versionsFilePath = path.resolve(__dirname, path.join('src', 'styles', 'specs'));
if (fs.existsSync(versionsFilePath)) {
    fs.unlinkSync(versionsFilePath);
}

const fileContent = `$appVersion: 'v${version}';`;

fs.writeFileSync(versionsFilePath, fileContent);