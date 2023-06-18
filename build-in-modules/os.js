const data = require('./test-modul');
const os = require('os');

console.log(os);

console.log(`the first name is ${ data.firstValue } ,the second ${ data.secondValue } and the third is ${ data.thirdValue }`);
console.log("=====================");
console.log(os.type());
console.log(os.uptime());


