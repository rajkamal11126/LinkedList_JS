const Utility = require('./Utility');
let readlineSync = require('readline-sync');
let data = readlineSync.question("Enter the value: ");
let result = Utility.insertFirst(data);
console.log(result);