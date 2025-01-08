const os = require("os");

const userInfo = {
  freememory: os.freemem(),
  hostname: os.hostname(),
  userInfo: os.userInfo(),
  totalmem: os.totalmem(),
};

console.log(userInfo);
