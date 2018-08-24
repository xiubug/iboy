/**
 * Created by Iboy on 29/08/2018.
 * check the repos is exists on github.com.
 */

'use strict';

const axios = require('axios');
const ora = require('ora');
const chalk = require('chalk');

const utils = require('./utils');

module.exports = (repo, done) => {
    let oraer = ora({
        text: 'checking template from github.com...',
        color: "blue"
    }).start();

    // const REQUEST_URL = `https://api.github.com/users/${repoInfo[0]}/repos`;
    const URL = `https://github.com/${repo}`;

    axios(utils.getAuthInfo(URL)).then((res) => {
        console.log();
        if(res.status === 200 ){
            oraer.text = chalk.green('Template checked success from github.com.');
            oraer.succeed();
            console.log();
            done(repo);
        } else {
            oraer.stop();

            console.log();
            console.log(chalk.red(`Template checked fail: ${repo} not found on github.com.`));
            console.log();
            console.log(`Please check the repo's url(${chalk.blue(URL)}) is available.`);
            process.exit(1);
        }
    }).catch((err) => {
        console.log(err);
        if(err) {
            const res = err.response;
            oraer.text = chalk.white(`iboy cli:checking template ${repo} failed from github.com, error message as follows:`);
            oraer.fail();
            console.log();

            if(res && res.status === 403) {
                //api rate limit:https://developer.github.com/v3/#rate-limiting
                console.log(chalk.red(`     ${res.statusText}: ${res.data.message}\n\ndocumentation: ${res.data.documentation_url}`));
                console.log();
                console.log(`     Please set auth token to get a higher rate limit by ${chalk.blue('iboy token')}. Check out the documentation for more details.`);
                console.log();
                console.log('     documentation: https://developer.github.com/v3/auth/#basic-authentication');
            } else {
                if(res) {
                    console.log(chalk.red(`     ${res.statusText}: ${res.headers.status}`));
                    console.log();
                    console.log(`Please check the repo's url(${chalk.blue(URL)}) is available.`);
                } else {
                    console.error(`     ${err.message}`);
                }
            }

            process.exit(1);
        }
    });
};