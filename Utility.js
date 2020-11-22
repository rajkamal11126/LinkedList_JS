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
        this.size++;
        return this.head;
    }

    /** Print list data */
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    }
    /** Insert last node */
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++; 
    }
}
module.exports = new Linkedlist();