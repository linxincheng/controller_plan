'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class GetServerListMngService extends Service {
    async echo() {
        let json = await this.getServerJson();
        return new RespBean(json);
    }
    getServerJson() {
        let json = fs.readFileSync('app/public/product/server.json', 'utf8');
        json = JSON.parse(json);
        return json;
    }
}

module.exports = GetServerListMngService;
