class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /** Insert first node */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this;
    }

    /** Print list data */
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    }
}
module.exports = new Linkedlist();