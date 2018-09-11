'use strict';

const Controller = require('egg').Controller;

class DelServerByIdController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.delServerByIdMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = DelServerByIdController;
