'use strict';

const Controller = require('egg').Controller;

class ServerStatusController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.serverStatusMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = ServerStatusController;
