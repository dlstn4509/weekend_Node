const path = require('path');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, '../log'),
});
const logger = morgan('combined', { stream: accessLogStream });
module.exports = logger;
