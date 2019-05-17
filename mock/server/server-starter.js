/**
 * @file server-starter
 * @author lzheng
 */
var express = require('express');

// var config = require('common/config');
// var utils = require('common/utils');
var config = require('../../config/PATHS');
var common = require('../common')

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
const MemoryFS = require("memory-fs");
/**
 * 本文件是简易后端的入口
 *
 * @type {{start: backendServer.start}}
 */
var backendServer = {
    start: function () {

        var app = express();

        app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
            res.header('Access-Control-Allow-Headers', ' cache-control,content-type,expires,x-requested-with');
            // res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("X-Powered-By",' 3.2.1')
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Content-Type', 'application/json;charset=utf-8');
            if (req.method === 'OPTIONS') {
                res.sendStatus(200);
            } else if (req.method === 'GET' || req.method === 'POST' ) {
                var data = backendServer.getMock(req.params[0]);
                if(data){
                    res.send(data)
                }else{
                    res.send('没有对应的mock数据')
                }
                
            } else {
                next();
            }
        });
        
        app.listen(config.prodPort, function (err) {
            if (err) {
                console.error('error: 启动后端服务器出现错误', err, err.stack);
                return;
            }
            console.log('info: 后端服务器启动成功, http://localhost:' + config.prodPort);
        });

    },
    startWebpackConfig(){
        var webpackConfig = require('../../config/webpack.dev');
        const fs = new MemoryFS();
        var compiler = webpack(webpackConfig,(err, stats) => {
            if (err) {
              console.error(err.stack || err);
              if (err.details) {
                console.error(err.details);
              }
              return;
            }
          
            const info = stats.toJson();
          
            if (stats.hasErrors()) {
              console.error(info.errors);
            }
          
            if (stats.hasWarnings()) {
              console.warn(info.warnings);
            }
          
            // 记录结果...
          });
        compiler.outputFileSystem = fs;
        compiler.run((err, stats) => {
            // 之后读取输出：
            const content = fs.readFileSync("...");
        });
        
    },

    getMock(str = ''){
        console.log(str)
        var data = null;
        for(var i=0; i<common.length;i++){
            if(common[i].test === str){
                data = require('../'+common[i].mock)
            }
        }
        return data;
    }
};

module.exports = backendServer;
