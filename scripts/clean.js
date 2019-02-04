'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk');
const fs = require('fs-extra');

const paths = require('./utils/paths');

console.log(chalk.cyan('Cleaning build files.'));

if (fs.existsSync(paths.appClientBuild)) {
  fs.removeSync(paths.appClientBuild);
}

console.log(chalk.green('Clean complete!'));
