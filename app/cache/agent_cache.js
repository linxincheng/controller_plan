class AgentCache{
    constructor(){
        this.map = new Map();
    }

    putCache(key,value){
        this.map.set(key,value);
    }

    findCache(key){
        return this.map.get(key);
    }

    delete(key){
        this.map.delete(key);
    }
    
}
module.exports = new AgentCache();