module.exports = () => {
  const dotenv = require('dotenv');
  const path = require('path');

  let file = '';
  if (process.env.NODE_ENV === 'test') file = '.env.test';
  if (process.env.NODE_ENV === 'production') file = '.env.production';

  dotenv.config({
    path: path.join(__dirname, '../', file),
  });
};
