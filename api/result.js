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
        //progess:命令，parameter:参数
        var hciconfig = spawn(option["progess"], option['parameter']);
        hciconfig.on("exit", function (code) {
            if (code !== 0) {
                //失败
                callback("failed");
            } else {
                //成功
                callback("ok");
            }
        });
    };
    self.init(option);
};
util.inherits(Bluetooth, EventEmitter);

