'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class GetServerListMngService extends Service {
  async echo() {
    let json = await this.getServerXmlToJson();
    return new RespBean(json);
  }
  getServerXmlToJson() {
    let serverContent = fs.readFileSync('app/public/edit/server.json' , 'utf8');
    serverContent = JSON.parse(serverContent);
    return serverContent;
  }
}

module.exports = GetServerListMngService;
