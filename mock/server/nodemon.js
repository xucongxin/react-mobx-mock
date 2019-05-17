/**
 * @file 用于将后端内容提供给开发时
 */

var nodemon = require('nodemon');
var config = require('../../config/PATHS');
// var config = require('common/config');
var utils = require('../utils/utils');

nodemon({
    script: utils.p(config.mock + '/server/nodemon-index.js'),
    watch: [
        config.mock + '/common/',
    ]
});
