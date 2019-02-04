const os = require('os');
const spawnSync = require('child_process').spawnSync;

module.exports = command => {
  const isWin = os.platform() === 'win32';
  const checker = isWin ? 'where' : 'command -v';

  const result = spawnSync(checker, [command], {
    stdio: 'ignore',
    shell: true,
  });

  return result.status === 0;
};
