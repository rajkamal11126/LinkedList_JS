const Utility = require('./Utility');
let readlineSync = require('readline-sync');
choice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        /** take choice input from the user */
        let choice = readlineSync.question("\nEner your choice:\n1.firstNode\n2.lastNode\n3.insertAtIndex\n4.removeAtIndex\n5.print\n6.exit\n");
        switch (choice) {
            case '1':
                let firstPosition = readlineSync.question("Enter the element in first position: ");
                Utility.insertFirst(firstPosition);
                break;
            case '2':
                let lastPosition = readlineSync.question("Enter the element in last position: ");
                Utility.insertLast(lastPosition);
                break;
            case '3':
                let insertElement = readlineSync.question("Enter the element: ");
                let index = readlineSync.question("Enter the index: ");
                Utility.insertAt(insertElement, index);
                break;
            case '4':
                let indexNumber = readlineSync.question("Enter the index for deletion: ");
                Utility.removeAt(indexNumber);
            case '5':
                Utility.printListData();
                break;
            case '6':
                isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
choice();
