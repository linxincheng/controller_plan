'use strict';

const Controller = require('egg').Controller;

class GetSystemAuthInfoController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.publish.getSystemAuthInfoMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = GetSystemAuthInfoController;
