'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');
const uuid = require('node-uuid');

class BatchSaveOrUpdatePageInfoMngService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    async echo() {
        let writeJson = this.writeJson();
        return new RespBean(writeJson);
    }
    getJson() {
        let deviceContent = fs.readFileSync('app/public/edit/device.json', 'utf8');
        let deviceJson = JSON.parse(deviceContent);
        return deviceJson;
    }
    writeJson() {
        let json = this.getJson();
        let data = this.ctx.request.body;
        for(let i of Object.keys(json)){
            if(json[i].id == data.id){
                for(let j of Object.keys(data.menuList[0].componentList)){
                    if(data.menuList[0].componentList[j].id === ''){
                        data.menuList[0].componentList[j].id = uuid.v1();
                    }
                }
                json[i] = data;
                break;
            }
        }
        json = JSON.stringify(json);
        fs.writeFileSync('app/public/edit/device.json',json);
        return data;
    }
}

module.exports = BatchSaveOrUpdatePageInfoMngService;
