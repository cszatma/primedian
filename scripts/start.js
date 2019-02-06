'use strict';

process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

const paths = require('./utils/paths');
const checkChildStatus = require('./utils/checkChildStatus');

const args = process.argv.slice(2);

// Setup useful variables

// Parse args
const includesServer = args.includes('server');
const includesClient = args.includes('client');
const stdio = args.includes('--no-output') ? 'ignore' : 'inherit';

// If no selection is specified start both
const startAll = includesServer === includesClient;
const startServer = startAll || includesServer;
const startClient = startAll || includesClient;

/* Being start process */
console.log(
  `Starting ${chalk.cyan(startServer ? 'server' : '')}${
    startAll ? ' and ' : ''
  }${chalk.cyan(startClient ? 'client' : '')}.\n`
);

const serverProgram = () => ({
  command: require.resolve(`${paths.appNodeModules}/nodemon/bin/nodemon`),
  args: [paths.appIndex, '-i', 'client/'],
});

const reactScriptsStart = `${paths.reactScripts}/start`;

if (startAll) {
  // Run the server and the client
  const program = serverProgram();
  const concurrently = require.resolve(
    `${paths.appNodeModules}/concurrently/bin/concurrently`
  );
  const args = [
    `"${program.command} ${program.args.join(' ')}"`,
    `"cd ${paths.appClient} && node ${reactScriptsStart}"`,
    '--names',
    'Server,Client',
    '-c',
    'red,blue',
  ];
  const result = spawnSync(concurrently, args, { stdio, env: process.env });

  checkChildStatus(result.status, 'concurrently');
  console.log(chalk.green(`Finished running the server and client.\n`));
} else if (startServer) {
  const program = serverProgram();
  const result = spawnSync(program.command, program.args, {
    stdio,
    env: process.env,
  });

  checkChildStatus(result.status, 'nodemon');
  console.log(chalk.green(`Finished running the server.\n`));
} else if (startClient) {
  // Run just the client
  const result = spawnSync('node', [reactScriptsStart], {
    cwd: paths.appClient,
    stdio,
    env: process.env,
  });

  checkChildStatus(result.status, 'node');
  console.log(chalk.green('Finished running the client.\n'));
}
