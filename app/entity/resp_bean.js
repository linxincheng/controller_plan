/**
 * Created by 2018 on 2018/8/23.
 * auth:linxincheng
 * 响应实体
 */
"use strict";
class RespBean{
    constructor(data,code=0,desc='操作成功',result=true){
        this.data = data;
        this.code = code;
        this.desc = desc;
        this.result = result;
    }
    // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
            this.ctx.throw(result.status, errorMsg);
        }
        if (!result.data.success) {
            // 远程调用返回格式错误
            this.ctx.throw(500, 'remote response error', { data: result.data });
        }
    }

    /**
     * 可以单个进行编号数据
     * @param data
     */
    setData(data){
        this.data = data;
    }

    setCode(code){
        this.code = code;
    }

    setDesc(desc){
        this.desc = desc;
    }

    setResult(result){
        this.result = result;
    }
}
module.exports = RespBean;
