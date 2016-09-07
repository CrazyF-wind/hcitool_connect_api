/**
 * Created by Administrator on 2016/9/7.
 */
var spawn = require('child_process').spawn;
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Bluetooth = module.exports = function (option, callback) {
    var self = this;
    EventEmitter.call(self);
    self.init = function (option) {
        console.log("option:" + option);
        var hciTool = spawn(option["progess"], option['parameter']);
        hciTool.stdout.on('data', function (data) {
            if (data.length) {
                //返回成功结果
                var result = data.toString('utf-8');
                console.log("result:" + result);
                callback(result);
            } else {
                //返回失败结果
                callback("failed");
            }
        });
    };
    self.init(option);
};
util.inherits(Bluetooth, EventEmitter);

