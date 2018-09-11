'use strict';

const Controller = require('egg').Controller;

class DelPageByIdController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.delPageByIdMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = DelPageByIdController;
