'use strict';

const Controller = require('egg').Controller;

class BatchSaveOrUpdatePageInfoController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.batchSaveOrUpdatePageInfoMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = BatchSaveOrUpdatePageInfoController;
