'use strict';

const Controller = require('egg').Controller;

class GetPageInfoController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.publish.getPageInfoMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = GetPageInfoController;
