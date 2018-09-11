'use strict';

const Controller = require('egg').Controller;

class GetServerListController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.getServerListMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = GetServerListController;
