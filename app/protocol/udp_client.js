/*server*/
const dgram = require('dgram'); 
const server = dgram.createSocket('udp4'); //创建udp服务器

class WokerToAgentDeal{
    constructor() {
        this._initUDPServer();
    }
    _initUDPServer() {
        server.on('close',()=>{ // ()=> 是 ES6的箭头函数，写成 function()也是可以的
            console.log('socket已关闭');
        });
        server.on('error',(err)=>{
            console.log(err);
        });
        // server.on('message',(msg,rinfo)=>{
        //     console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
        // });
    }
    sendMsg(multicastAddr,message) {
        server.send(message,0,message.length,8061,multicastAddr);
    }
}
module.exports = new WokerToAgentDeal();