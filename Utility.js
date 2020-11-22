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
}
module.exports = new Linkedlist();