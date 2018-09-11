'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/', controller.home.index);

  let models = ['edit','publish'];
  for(let model of models){
    const BaseObj = require("./routers/"+model);
    new BaseObj(app);
  }

};
