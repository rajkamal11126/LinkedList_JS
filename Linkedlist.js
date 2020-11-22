const Utility = require('./Utility');
let readlineSync = require('readline-sync');
choice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let element = readlineSync.question("Enter the element:");
        Utility.insertFirst(element); // insert the value from the first node
        Utility.printListData(); //print the data of the node
    }
}
choice();