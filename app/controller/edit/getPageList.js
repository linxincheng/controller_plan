'use strict';

const Controller = require('egg').Controller;

class GetPageListController extends Controller {
  async create() {    
    const userInfo = await this.ctx.service.edit.getPageListMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = GetPageListController;
