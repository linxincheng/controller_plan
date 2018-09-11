'use strict';

const Controller = require('egg').Controller;

class ImportProjectInfoController extends Controller {
  async create() {
    const userInfo = await this.ctx.service.edit.importProjectInfoMng.echo();
    this.ctx.body = userInfo;
  }
  async index() {
    const userInfo = await this.ctx.service.edit.importProjectInfoMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = ImportProjectInfoController;
