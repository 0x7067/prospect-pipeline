const { spawn } = require('node:child_process');
const { request } = require('node:http');

const port = 41993;
const server = spawn('python3', ['-m', 'http.server', String(port), '--bind', '127.0.0.1'], {
  stdio: 'ignore',
});

function waitForServer(attempts = 30) {
  return new Promise((resolve, reject) => {
    const probe = () => {
      const req = request({ host: '127.0.0.1', port, path: '/index.html' }, res => {
        res.resume();
        if (res.statusCode === 200) return resolve();
        retry();
      });
      req.on('error', retry);
      req.end();
    };
    const retry = () => {
      if (!attempts--) return reject(new Error('local server did not become ready'));
      setTimeout(probe, 100);
    };
    probe();
  });
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: './.playwright' } });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)));
  });
}

(async () => {
  try {
    await waitForServer();
    await run('node', ['--check', 'script.js']);
    await run('node', ['verify_build.cjs']);
  } finally {
    server.kill();
  }
})().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
