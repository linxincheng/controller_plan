'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const RespBean = require('../../entity/resp_bean');
const uuid = require('node-uuid');

class SaveOrUpdatePageMngService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    async echo() {
        let result = this.pageUpdated();
        return new RespBean(result);
    }
    getJson() {
        let deviceContent = fs.readFileSync('app/public/edit/device.json', 'utf8');
        let deviceJson = JSON.parse(deviceContent);
        return deviceJson;
    }
    pageUpdated() {
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
        fs.writeFileSync('app/public/edit/device.json',JSON.stringify(json));
        return json;
    }
}

module.exports = SaveOrUpdatePageMngService;
