'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');

class SendCommandWithUpdateMngService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    async echo() {
        let json = this.sendCommand();
        return new RespBean(json);
    }
    getDeviceJson() {
        let deviceContent = fs.readFileSync('app/public/product/device.json', 'utf8');
        let deviceJson = JSON.parse(deviceContent);
        return deviceJson;
    }
    getServerJson() {
        let serverContent = fs.readFileSync('app/public/product/server.json', 'utf8');
        let serverJson = JSON.parse(serverContent);
        return serverJson;
    }
    sendCommand() {
        let json = this.getDeviceJson();
        let serverJson = this.getServerJson();
        let data = this.ctx.request.body;
        let id = JSON.parse(data.device).id;
        let value = JSON.parse(data.device).value;
        let device = {};
        //find page
        for (let i of Object.keys(json)) {
            if (json[i].id == 'index') {
                let jsonT = json[i].menuList[0].componentList
                //find device
                for (let j of Object.keys(jsonT)) {
                    if (jsonT[j].id == id) {
                        jsonT[j].value = value;
                        device['device'] = jsonT[j];
                        break;
                    }
                }
            }
        }
        //find server
        for (let k of Object.keys(serverJson)) {
            if (serverJson[k].id == data.serverId) {
                data['server'] = serverJson[k];
            }
        }
        this.app.messenger.sendToAgent('sendCommand', data);
        fs.writeFileSync('app/public/product/device.json', JSON.stringify(json));
        return device;
    }
}

module.exports = SendCommandWithUpdateMngService;
