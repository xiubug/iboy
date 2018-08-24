/**
 * Created by Iboy on 29/07/2018.
 */

module.exports = function evaluate (exp, data) {
    let fn = new Function('data', 'with (data) { return ' + exp + '}');
    try {
        return fn(data);
    } catch (e) {
        console.error(`Error when evaluating filter condition: ${exp}`);
    }
};