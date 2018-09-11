class EditRouter{
    constructor(app){
        this._init(app);
    }
    _init(app){
        const { router, controller } = app;
        //编辑页面
        router.resources('getPageList', '/CPD/edit/getPageList', controller.edit.getPageList);
        router.resources('getServerList', '/CPD/edit/getServerList', controller.edit.getServerList);  
        router.resources('batchSaveOrUpdatePageInfo', '/CPD/edit/batchSaveOrUpdatePageInfo', controller.edit.batchSaveOrUpdatePageInfo);  
        router.resources('importProjectInfo', '/CPD/edit/importProjectInfo', controller.edit.importProjectInfo);
        router.resources('publish', '/CPD/edit/publish', controller.edit.publish);
        router.resources('saveOrUpdateServer', '/CPD/edit/saveOrUpdateServer', controller.edit.saveOrUpdateServer);
        router.resources('serverStatus', '/CPD/edit/serverStatus', controller.edit.serverStatus);
        router.resources('delServerById', '/CPD/edit/delServerById', controller.edit.delServerById);
        router.resources('saveOrUpdatePage', '/CPD/edit/saveOrUpdatePage', controller.edit.saveOrUpdatePage);
        router.resources('delPageById', '/CPD/edit/delPageById', controller.edit.delPageById);
      
    }
}

module.exports = EditRouter;