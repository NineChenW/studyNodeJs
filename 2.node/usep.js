/**
 * Created by Administrator on 2017/10/24.
 */
var person = require("./person");
var fs = require('fs');
console.log(global);

var s = fs.readFileSync("C:/v.txt","utf8");
console.log(s);