'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class GetPageListMngService extends Service {
  async echo() {
    let json = await this.getDeviceJson();
    return new RespBean(json);
  }
  getDeviceJson() {
    let json = fs.readFileSync('app/public/edit/device.json' , 'utf8');
    json = JSON.parse(json);
    return json;
  }
}

module.exports = GetPageListMngService;
