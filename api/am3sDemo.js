/**
 * Created by Administrator on 2016/9/18.
 */
var JVM = require("node-jvm");
var jvm = new JVM();
jvm.setLogLevel(7);
//var entryPointClassName = jvm.loadJarFile("../lib/iHealthLibrary_2.3.0.23.jar");
var entryPointClassName = jvm.loadJarFile("../lib/testdemo.jar");
//jvm.loadClassFile("./Main.class");
//jvm.run();


jvm.setEntryPointClassName(entryPointClassName);
jvm.on("exit", function (code) {
    process.exit(code);
});
console.log(jvm.run());