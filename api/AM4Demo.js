/**
 * Created by Administrator on 2016/9/18.
 */
var java = require("java");
java.classpath.push("../lib/testdemo.jar");
java.classpath.push("../lib/iHealthLibrary_2.3.0.23.jar");
java.classpath.push("../lib/android.jar");

java.import('com.ihealth.communication.control.Am3sControl');
//java.import("android.content.Context");
//java.import("com.ihealth.communication.base.comm.BaseComm");
//java.import("com.ihealth.communication.base.comm.BaseCommCallback");
//java.import("com.ihealth.communication.ins.InsCallback");

var result = java.callStaticMethodSync("com.GetValue", "getNewValue", "123");
console.log("result:" + result);

java.callStaticMethod("com.GetValue", "getNewValue", "123", function (err, results) {
    if (err) {
        console.error(err);
        return;
    }
    // results from doSomething
    console.log("results:" + results);
});

var GetValue = java.newInstanceSync("com.GetValue");
var data = java.callMethodSync(GetValue, "getData", "dd");
console.log("data:" + data);

//获取时间模式
//var AM3SClasss = java.newInstanceSync("com.ihealth.communication.manager.iHealthDevicesManager");
//if (java.instanceOf(AM3SClasss, "com.ihealth.communication.manager.iHealthDevicesManager")) {
//    console.log("obj is an instance of SuperClass");
//}
//var HourMode = java.callMethodSync(AM3SClasss, "getHourMode");
//console.log("HourMode:" + HourMode);

//连接设备
//var AM3SClasss = java.newInstanceSync("com.ihealth.communication.control.Am3sControl");
//var Connect = java.callMethodSync(AM3SClasss, "connectDevice", "远古的风", "004D320624D1", "AM3S");
//console.log("Connect:" + Connect);


java.newInstance("com.ihealth.communication.control.Am3sControl", function (err, list) {
    if (err) {
        console.error(err);
        return;
    }
    // new list
    console.log("err:" + err);
    console.log("list:" + list);
});

//var result = java.callStaticMethodSync("com.ihealth.communication.control.Am3sControl", "getHourMode");
//console.log("result:" + result);

//连接AM3S
//var conn = java.callStaticMethodSync("com.ihealth.communication.manager.iHealthDevicesManager",
//    "connectDevice", "远古的风", "004D320624D1", "AM3S");
//console.log("result:" + conn);
//java.callStaticMethod("com.ihealth.communication.manager.iHealthDevicesManager",
//    "connectDevice", "远古的风", "004D320624D1", "AM3S", function (err, results) {
//        if (err) {
//            console.error(err);
//            return;
//        }
//        // results from doSomething
//        console.log("results:" + results);
//    });