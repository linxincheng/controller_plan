'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534989801316_7120';

  // add your config here
  config.middleware = ['check'];
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0',
    },
    app: true,
    agent:true
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 配置 gzip 中间件的配置
  config.bodyParser = {
    enable: true
  };
  return config;
};
