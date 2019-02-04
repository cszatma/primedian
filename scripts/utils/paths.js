'use strict';

const fs = require('fs-extra');
const path = require('path');

// Resolve paths relative to the root project directory
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// Resolve paths relative to the client
const clientDirectory = resolveApp('client');
const resolveClient = relativePath =>
  path.resolve(clientDirectory, relativePath);

// Resolve packages installed in the client
const resolveClientPackage = packageName =>
  resolveClient(`node_modules/${packageName}`);

module.exports = {
  appClient: clientDirectory,
  appClientBuild: resolveClient('build'),
  appIndex: resolveApp('src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  clientPackageJson: resolveClient('package.json'),
  reactScripts: `${resolveClientPackage('react-scripts')}/scripts`,
  yarnLockFile: resolveApp('yarn.lock'),
};
