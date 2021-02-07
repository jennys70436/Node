var fs = require('fs');
var data = fs.readFileSync('abc.txt');
console.log(data.toString());

var color = require('colors');
console.log('jenny'.red)

var m1 = require('./module1')
m1.run();