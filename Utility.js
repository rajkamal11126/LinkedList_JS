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
    insertFirst = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
        return this.head;
    }

    /** Print list data */
    printListData = () => {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    }
    /** Insert last node */
    insertLast = (data) => {
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
    /** Insert at index */
    insertAt= (data, index) => { 
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; //node before index
            count++;
            current = current.next; // Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }
}
module.exports = new Linkedlist();