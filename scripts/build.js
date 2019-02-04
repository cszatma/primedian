'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const paths = require('./utils/paths');
const checkChildStatus = require('./utils/checkChildStatus');

const args = process.argv.slice(2);

const stdio = args.includes('--no-output') ? 'ignore' : 'inherit';

/* Start build process */

console.log(`\nBuilding ${chalk.cyan('client')}...\n`);

const result = spawnSync('node', [`${paths.reactScripts}/build`], {
  cwd: paths.appClient,
  stdio,
  env: process.env,
});

checkChildStatus(result.status, 'node');
console.log(chalk.green('Successfully built the client!\n'));
