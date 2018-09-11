'use strict';

const Service = require('egg').Service;
const RespBean = require('../../entity/resp_bean');
const fs = require('fs');
const stat = fs.stat;
class PublishMngService extends Service {
    async echo() {
        this.copy('app/public/edit','app/public/product')
        return new RespBean('实时');
    }
    async copy(src, dst) {
        fs.readdir( src, function( err, paths ){
            if( err ){
                throw err;
            }
            paths.forEach(function( path ){
                var _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;      
      
                stat( _src, function( err, st ){
                    if( err ){
                        throw err;
                    }
      
                    // 判断是否为文件
                    if( st.isFile() ){
                        // 创建读取流
                        readable = fs.createReadStream( _src );
                        // 创建写入流
                        writable = fs.createWriteStream( _dst ); 
                        // 通过管道来传输流
                        readable.pipe( writable );
                    }
                });
            });
        });
    }
}

module.exports = PublishMngService;
