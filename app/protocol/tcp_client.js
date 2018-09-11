
var net = require('net');

tcpClient = net.Socket();
// PORT = 18001;
// HOST = '127.0.0.1';

class TcpToAgentDeal{
    constructor() {
        this._initTCPServer();
    }
    _initTCPServer() {
        tcpClient.on('data', function (data) {
            console.log('我是tcp客户端', data.toString());
        });
    }
    sendMsg(HOST,PORT,message) {
        message = `${message}`;
        tcpClient.connect(PORT, HOST, function () {
            tcpClient.write(message);//服务器向客户端发送消息
        });
        //监听服务器端发过来的数据
    }
}
module.exports = new TcpToAgentDeal();

