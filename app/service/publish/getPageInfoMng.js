'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class GetPageInfoMngService extends Service {
  async echo() {
    let json = await this.getDeviceJson();
    if(json === false){
        return new RespBean('',1,'找不到指定页面',false);
    }else{
        return new RespBean(json);
    }
  }
  getDeviceJson() {
      let data = this.ctx.request.body;
      let json = fs.readFileSync('app/public/product/device.json' , 'utf8');
      json = JSON.parse(json);
      let result = true;
    for(let i of Object.keys(json)){
        if(json[i].id == data.id){
            result = json[i];
            break;
        }
    }
    if(result === true)return false;
    return result;
  }
}

module.exports = GetPageInfoMngService;
