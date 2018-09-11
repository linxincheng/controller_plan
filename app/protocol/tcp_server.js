var net = require('net');

PORT = 18001;
HOST = '127.0.0.1';
var tcpServer;
class TcpServerToAgentDeal{
    constructor() {
        this._initTCPServer();
    }
    _initTCPServer() {
        //TCP服务器端
        var clientHandler = function (socket) {
          
          //客户端发送数据的时候触发data事件
          socket.on('data', function dataHandler(data) {//data是客户端发送给服务器的数据
            console.log(socket.remoteAddress, socket.remotePort, '发送内容是：', data.toString());
            //服务器向客户端发送消息
            socket.write('内容收到了（服务器发送出来的）');
            socket.end();
          });
          
          //当对方的连接断开以后的事件
          socket.on('close', function () {
            console.log(socket.remoteAddress, socket.remotePort, '断开连接\n');
          })
        };
        
        //创建TCP服务器的实例
        //传入的参数是：监听函数clientHandler
        tcpServer = net.createServer(clientHandler);
        
        tcpServer.listen(PORT, HOST);
        console.log('tcp server running on tcp://', HOST, ':', PORT);
    }
}
module.exports = new TcpServerToAgentDeal();