/**
 * Created by Administrator on 2016/9/12.
 */
var spawn = require('child_process').spawn;
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Q = require("q");

//var Bluetooth = module.exports = function (option, callback) {
//    var self = this;
//    EventEmitter.call(self);
//    self.init = function (option) {

var MacId = '00:4D:32:06:24:D1';
//var gatttool = spawn('gatttool -b ' + MacId + ' -I');
var gatttool = spawn('gatttool', ['-b', MacId, '-I']);

//gatttool.stdout.pipe(process.stdout);   // 把子进程的输出导向控制台
//gatttool.stdin.write('connect \n');   // 连接
//gatttool.stdin.write('primary \n');   // 基本属性

//通用
var com = function (req) {
    gatttool.stdin.write(req + '\n');   // 基本属性

}

//连接
var connect = function (data) {
    var deferred = Q.defer();
    com("connect");
    deferred.resolve(data + " fun1");
    return deferred.promise;
}

//基本属性
var primary = function (data) {
    var deferred = Q.defer();
    com("primary");
    deferred.resolve(data + " fun2");
    return deferred.promise;
}

//特性
var characteristics = function (data) {
    var deferred = Q.defer();
    com("characteristics");
    deferred.resolve(data + " fun2");
    return deferred.promise;
}

Q.all([
    connect("test1"), primary("test2"), characteristics("test3")
]).spread(function () {
    console.log(arguments);//获得的参数为('test1 fun1', 'test2 fun2' )
});


gatttool.stdout.on('data', function (data) {
    console.log("输出：" + data.toString("UTF-8"));
    console.log("结束！");
});
gatttool.stdin.end();
//console.log("option:" + option);
//var hciTool = spawn(option["progess"], option['parameter']);
//hciTool.stdout.on('data', function (data) {
//    if (data.length) {
//        //返回成功结果
//        var result = data.toString('utf-8');
//        console.log("result:" + result);
//        callback(result);
//    } else {
//        //返回失败结果
//        callback("failed");
//    }
//});


//    };
//    self.init(option);
//};
//util.inherits(Bluetooth, EventEmitter);

