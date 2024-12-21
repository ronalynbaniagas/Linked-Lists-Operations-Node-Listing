// Define Node class
class Node {
    constructor(value) {
        this.value = value;  // Value of the node
        this.next = null;    // Pointer to the next node
    }
}

// Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;  // Start of the list
        this.size = 0;     // Size of the list
    }

    // Append a new node to the list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode; // If the list is empty, set head to the new node
        } else {
            let current = this.head;
            while (current.next !== null) { // Traverse to the end of the list
                current = current.next;
            }
            current.next = newNode; // Add the new node at the end
        }
        this.size++;
    }

    // Remove a node with a specific value
    remove(value) {
        if (this.head === null) return false; // List is empty

        if (this.head.value === value) { // If the head node is to be removed
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) return false; // Value not found

        current.next = current.next.next; // Remove the node by skipping over it
        this.size--;
        return true;
    }

    // Find a node with a specific value
    find(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return current; // Return the node if found
            current = current.next;
        }
        return null; // Return null if not found
    }

    // Print the linked list
    print() {
        let current = this.head;
        console.log("Linked List:");
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Get the size of the linked list
    getSize() {
        console.log(`Size of the Linked List: ${this.size}`);
    }
}

// Example Usage
const list = new LinkedList();
list.append("Data Structures – Array");
list.append("Variable Type – Integer");
list.append("Sorting Algorithm – Bubble Sort");

list.print();
list.getSize();

console.log("\nFinding a node:");
console.log(list.find("Variable Type – Integer")); // Should print the node object

console.log("\nRemoving a node:");
list.remove("Variable Type – Integer"); // Removes this node
list.print(); // Prints the updated list
list.getSize();
