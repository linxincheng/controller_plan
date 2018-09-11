'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const userInfo = await this.ctx.service.homeMng.echo();
    this.ctx.body = userInfo;
  }
}

module.exports = HomeController;
