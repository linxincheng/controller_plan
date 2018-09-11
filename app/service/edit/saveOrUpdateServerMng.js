'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');
const uuid = require('node-uuid');

class SaveOrUpdateServerMngService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    async echo() {
        let writeJson = this.saveJson();
        return new RespBean(writeJson);
    }
    getJson() {
        let deviceContent = fs.readFileSync('app/public/edit/server.json', 'utf8');
        let deviceJson = JSON.parse(deviceContent);
        return deviceJson;
    }
    saveJson() {
        let json = this.getJson();
        let data = this.ctx.request.body;
        if(data.id == ''){
            data.id = uuid.v1();
            json.push(data);
        }else{
            for(let i of Object.keys(json)){
                if(json[i].id == data.id){
                    json[i] = data;
                    break;
                }
            }
        }
        fs.writeFileSync('app/public/edit/server.json',JSON.stringify(json));
        return json;
    }
}

module.exports = SaveOrUpdateServerMngService;
