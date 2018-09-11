'use strict';

const Service = require('egg').Service;
const RespBean = require('../entity/resp_bean');
class HomeMngService extends Service {
    async echo() {
        return new RespBean('hi');
    }
}

module.exports = HomeMngService;
