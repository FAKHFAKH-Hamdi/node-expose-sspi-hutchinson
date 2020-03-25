if (require('os').platform() !== 'win32') {
  throw new Error(
    "The module 'node-expose-sspi' can only work on Microsoft Windows platform."
  );
}

const { sspi, adsi, sysinfo } = require('./lib/sspi');
const { sso } = require('./dist/index');

module.exports = {
  sspi,
  adsi,
  sysinfo,
  sso,
};
