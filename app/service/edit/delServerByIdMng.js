'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class DelServerByIdMngService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    async echo() {
        let result = this.delServer();
        return new RespBean(result);
    }
    getJson() {
        let deviceContent = fs.readFileSync('app/public/edit/server.json', 'utf8');
        let deviceJson = JSON.parse(deviceContent);
        return deviceJson;
    }
    delServer() {
        let json = this.getJson();
        let data = this.ctx.request.body;
        for(let i of Object.keys(json)){
            if(json[i].id == data.id){
                json.splice(i,1);
                break;
            }
        }
        json = JSON.stringify(json);
        fs.writeFileSync('app/public/edit/server.json',json);
        return '';
    }
}

module.exports = DelServerByIdMngService;
