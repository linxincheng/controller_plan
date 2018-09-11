'use strict';

const Controller = require('egg').Controller;

class SaveOrUpdatePageController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.saveOrUpdatePageMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = SaveOrUpdatePageController;
