'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;
const fs = require('fs-extra');

const paths = require('./utils/paths');
const checkChildStatus = require('./utils/checkChildStatus');
const commandExists = require('./utils/commandExists');

const args = process.argv.slice(2);
const stdio = args.includes('--no-output') ? 'ignore' : 'inherit';

const pm =
  fs.existsSync(paths.yarnLockFile) && commandExists('yarn') ? 'yarn' : 'npm';

console.log(`\nInstalling ${chalk.cyan('client')} dependencies...\n`);

const result = spawnSync(pm, ['install'], {
  cwd: paths.appClient,
  stdio,
  env: process.env,
});

checkChildStatus(result.status, 'node');
console.log(chalk.green('Successfully installed the client dependencies!\n'));
