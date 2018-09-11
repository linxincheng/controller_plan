'use strict';

const Controller = require('egg').Controller;

class SaveOrUpdateServerController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.saveOrUpdateServerMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = SaveOrUpdateServerController;
