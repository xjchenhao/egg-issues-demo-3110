'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540259075181_366';

  // 设置静态资源的路径
  config.static = {
    prefix: '/',
    dir: [ path.join(appInfo.baseDir, 'app/public') ],
  };

  // add your config here
  config.middleware = [];

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  // 客户端资源配置
  config.assets = {
    publicPath: '/pages',
    devServer: {
      debug: false,
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + '/app/assets',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  return config;
};
