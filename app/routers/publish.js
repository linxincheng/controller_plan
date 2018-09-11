class PublishRouter{
    constructor(app){
        this._init(app);
    }
    _init(app){
        const { router, controller } = app;
        //发布页面
        router.resources('publishGetPageInfo', '/CPD/publish/getPageInfo', controller.publish.getPageInfo);
        router.resources('publishGetServerList', '/CPD/publish/getServerList', controller.publish.getServerList);
        router.resources('publishGetSystemAuthInfo', '/CPD/publish/getSystemAuthInfo', controller.publish.getSystemAuthInfo);
        router.resources('publishSendCommandWithUpdate', '/CPD/publish/sendCommandWithUpdate', controller.publish.sendCommandWithUpdate);  
          }
}

module.exports = PublishRouter;