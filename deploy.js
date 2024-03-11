//deploy.js
// load modules
const fs = require('fs-extra');
const childProcess = require('child_process');

// clear
fs.emptyDirSync('cordova/www/app');

// // ng build 
// childProcess.execSync('ng build');

// copy files
fs.copySync('dist/qubic-wallet', 'cordova/www/app');

fs.copySync('cordova/config.xml', 'cordova/www/app/config.xml');

// cordova ready
// childProcess.execSync('cordova prepare');