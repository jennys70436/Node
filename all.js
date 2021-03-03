var fs = require('fs');
var data = fs.readFileSync('abc.txt');
console.log(data.toString());

var color = require('colors');
console.log('jenny'.red)

var m1 = require('./module1')
m1.run();

console.log(__filename);
console.log(__dirname);

console.log(process.argv);
console.log(process.env);
console.log(process.cwd());