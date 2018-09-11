'use strict';

const Controller = require('egg').Controller;

class PublishController extends Controller {
  async create() {
    const { app } = this;
    const userInfo = await this.ctx.service.edit.publishMng.echo();
    this.ctx.session.user = '888';
    app.redis.set('user', '888');
    this.ctx.body = userInfo;
  }
}

module.exports = PublishController;
