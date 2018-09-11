'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');

class ServerStatusMngService extends Service {
  async echo() {
    let result = {
        "isUsed":false
    }
    return new RespBean(result);
  }
}

module.exports = ServerStatusMngService;
