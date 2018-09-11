'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const agentCache = require('./../../cache/agent_cache');

class GetSystemAuthInfoMngService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  async echo() {
    let json = this.getAutoInfo();
    return new RespBean(json);
  }
  getAutoInfo() {
    this.consoleNum();
    this.app.messenger.sendToAgent('agent-event');
    //临时发送已经授权
    return {
      authTime:0,
      authed:true,
      featureList:[],
      leftTime:10000000,
      remark:"",
      trail:true
    }
  }
  consoleNum() {
    let num = agentCache.findCache('num');
    if(num == undefined){
      agentCache.putCache('num',1);
    }else{
      agentCache.putCache('num',++num);
    }
    num = agentCache.findCache('num');
    console.log(`work:第${num}次进发布页面`);
  }
}

module.exports = GetSystemAuthInfoMngService;
