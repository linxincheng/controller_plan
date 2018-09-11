var agentCache = require('./app/cache/agent_cache');
var udpClient = require('./app/protocol/udp_client');
var tcpClient = require('./app/protocol/tcp_client');
var tcpServer = require('./app/protocol/tcp_server');

module.exports = agent => {
    // 在这里写你的初始化逻辑
  
    // 也可以通过 messenger 对象发送消息给 App Worker
    // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
    agent.messenger.on('agent-event', (data) => {
    //   agent.messenger.sendToApp('xxx_action', data);
      let num = agentCache.findCache('num');
      if(num == undefined){
        agentCache.putCache('num',1);
      }else{
        agentCache.putCache('num',++num);    
      }
      num = agentCache.findCache('num');
      console.log(`agent:第${num}次进发布页面`);
    });
    agent.messenger.on('sendCommand', (data) => {
      if(data['server'].protocol == '1'){

      }else if(data['server'].protocol == '2'){
        tcpClient.sendMsg(data.server.ip,data.server.port,data.command);
      }else if(data['server'].protocol == '3'){
        udpClient.sendMsg(data.server.ip,data.command);
      }
    });
  };