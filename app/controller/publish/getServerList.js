'use strict';

const Controller = require('egg').Controller;

class GetServerListController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.publish.getServerListMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = GetServerListController;
