/**
 * Created by Iboy on 28/07/2018.
 * check the cli version
 */

'use strict';

const semver = require('semver');
const chalk = require('chalk');
const ora = require('ora');
const request = require('request');

const packageConfig = require('../package.json');

console.log();

module.exports = done => {

    let spinner = ora({
        text: "checking iboy cli version...",
        color: "blue"
    }).start();

    if (!semver.satisfies(process.version, packageConfig.engines.node)) {
        spinner.text = chalk.white('iboy cli:checking iboy cli version failed, error message as follows:');
        spinner.fail();

        console.log();
        console.error(`  You must upgrade node to ${packageConfig.engines.node} to use iboy cli`);
    }

    request({
        url: 'https://registry.npmjs.org/iboy',
        timeout: 10000
      }, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            spinner.text = chalk.green('Checking iboy cli version success.');
            spinner.succeed();

            const latestVersion = JSON.parse(body)['dist-tags'].latest
            const localVersion = packageConfig.version
            if (semver.lt(localVersion, latestVersion)) {
                console.log();
                console.log(chalk.blue('  A newer version of iboy is available.'));
                console.log();
                console.log(`  latest:    ${chalk.green(latest)}`);
                console.log(`  installed:    ${chalk.red(local)}`)
                console.log(`  update iboy latest: npm update -g iboy`);
                console.log();
            }
        }

        if (err) {
            const res = err.response;

            spinner.text = chalk.white('iboy: checking iboy version failed, error message as follows:');
            spinner.fail();

            console.log();

            if(res){
                console.log(chalk.red(`     ${res.statusText}: ${res.headers.status}`));
            } else {
                console.log(chalk.red(`     ${err.message}`));
            }
            console.log();
        }

        done()
    })
};
