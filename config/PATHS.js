const path = require('path');

module.exports = {
  prodPort: 8088,
  root: path.resolve(__dirname, "../"),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  doc: path.resolve(__dirname, '../docs'),
  private: path.resolve(__dirname, '../private_modules'),
  mock: path.resolve(__dirname, '../mock'),
};