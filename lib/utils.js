/**
 * Created by Iboy on 28/07/2018.
 * some utils function
 */

'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

module.exports = {
    isExist(tplPath) {
        const p = path.normalize(tplPath);
        try {
            fs.accessSync(p, fs.R_OK & fs.W_OK, (err) => {
                if (err) {
                    console.log();
                    console.error(`Permission Denied to access ${p}`);
                }
            })
            return true;
        } catch (e) {
            return false;
        }
    },
    isLocalTemplate(tpl) {
        const isLocal = tpl.startsWith('.') || tpl.startsWith('/') || /^\w:/.test(tpl);

        if(isLocal){
            return isLocal;
        } else {
            return this.isExist(path.normalize(path.join(process.cwd(), tpl)));
        }
    },
    getAuthInfo(url){
        let config = {
            url:  url,
            method: 'get',
            headers: {
                'User-Agent': 'iboy-cli'
            },
            timeout: 30000,
            auth:{}
        };

        const binPath = process.cwd();
        let tokenPath = path.normalize(path.join(binPath,'../../','lib/node_modules/iboy/lib/token.json'));

        if(this.isExist(tokenPath)){
            let authInfo = require(tokenPath);
            config.auth = authInfo;
        } else {
            delete config['auth'];
        }

        return config;
    }
}