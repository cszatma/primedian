'use strict';

process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const paths = require('./utils/paths');
const checkChildStatus = require('./utils/checkChildStatus');

const args = process.argv.slice(2);
const stdio = args.includes('--no-output') ? 'ignore' : 'inherit';

/* Being start process */
console.log(`Starting the server in production mode.\n`);

const result = spawnSync('node', [paths.appIndex], {
  stdio,
  env: process.env,
});

checkChildStatus(result.status, 'node');
console.log(chalk.green(`Finished running the server.\n`));
