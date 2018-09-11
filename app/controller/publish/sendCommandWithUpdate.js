'use strict';

const Controller = require('egg').Controller;

class SendCommandWithUpdateController extends Controller {
  async create() {//正常应该在这里根据设备类型进入不一样的文件处理，目前只做了声音
    const userInfo = await this.ctx.service.publish.sendCommandWithUpdateMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = SendCommandWithUpdateController;
