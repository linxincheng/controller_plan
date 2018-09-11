const RespBean = require("../entity/resp_bean");
const workCache = require('../cache/agent_cache')
module.exports = (options, app) => {
    return async function(ctx, next) {
        // let user = await app.redis.get('user');
        // console.log(`1:${user}`);
        // console.log(`2:${ctx.session.user}`);    
        if(ctx.session.user){
            // workCache.putCache('login',true);
            await next();
            ctx.body.setCode(200);
        }else{
            // console.log()
            await next();
        }
    }
}