'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const RespBean = require('../../entity/resp_bean');

const compressing = require('compressing');


class ImportProjectInfoMngService extends Service {
    async echo() {
        const ctx = this.ctx;
        //传递文件
        const stream = await ctx.getFileStream();
        const fileName = stream.filename;
        let target = path.join(this.config.baseDir, `app/public/${stream.filename}`);
        const result = await new Promise((resolve, reject) => {
            const remoteFileStream = fs.createWriteStream(target);
            stream.pipe(remoteFileStream);
            let errFlag;
            remoteFileStream.on('error', err => {
                errFlag = true;
                sendToWormhole(stream);
                remoteFileStream.destroy();
                reject(err);
            });
            remoteFileStream.on('finish', async () => {
                if (errFlag) return;
                resolve('');
            });
        });
        // 解压缩
        compressing.zip.uncompress(`app/public/${stream.filename}`, 'app/public/')
        .then(() => {
            fs.unlink(`app/public/${stream.filename}`)
            console.log('success');
        })
        .catch(err => {
            console.error(err);
        });
        return new RespBean(result);
    }
}

module.exports = ImportProjectInfoMngService;
