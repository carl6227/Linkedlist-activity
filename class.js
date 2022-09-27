
class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        // this.length = 0;
    }
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            return value;
        }
        let pointer = this.head;
        while (pointer.next !== null) {
            pointer = pointer.next;
        }
        pointer.next = node;
        return value;

    }

    shift() {
        if (!this.head) return null
        let currentHead = this.head
        let previousHead = this.head;
        this.head = currentHead.next;
        return previousHead = null;
    }


    traverse() {
        if (!this.head) return [];
        if (!this.head.next) return [this.head.data];
        let collection = []
        let pointer = this.head
        while (pointer !== null) {
            collection.push(pointer.data)
            pointer = pointer.next
        }
        return collection
    }

    pop() {
        if (!this.head) return null
        let pointer = this.head
        let last_node = null

        if (!this.head.next) {
            last_node = this.head
            this.head = null
            return last_node.data
        }


        while (pointer.next !== null) {
            if (!pointer.next.next) {
                pointer = pointer
                last_node = pointer.next
                break
            } else {
                pointer = pointer.next
            }
        }

        pointer.next = null

        return last_node.data
    }
    forEach(callback) {
        if (!this.head) return;

        let pointer = this.head;

        while (pointer !== null) {
            callback(pointer.data);
            pointer = pointer.next
            this.length++
        }

        return;
    }


    bubbleSort() {
        let firstPointer = this.head

        let sortedList = []
        let temporary = null
        for (firstPointer = this.head; firstPointer !== null; firstPointer = firstPointer.next) {
            for (secondPointer = firstPointer.next; secondPointer != null; secondPointer = secondPointer.next) {
                if (firstPointer.data > secondPointer.data) {
                    temporary = firstPointer.data
                    firstPointer.data = secondPointer.data
                    secondPointer.data = temporary;

                }

            }

            sortedList.push(firstPointer.data)

        }
        return sortedList
    }

    insertSort() {
        let dummy = new Node(0)
        let sorted = []
        let current = this.head
        while (current != null) {
            let secondPointer = current.next
            let firstPointer = dummy;
            while (firstPointer.next && firstPointer.next.data < current.data) {
                firstPointer = firstPointer.next
            }
            console.log("%c 🌶 secondPointer", "color:#b03734", secondPointer);
            console.log("%c 🍉 firstPointer", "color:#b03734", firstPointer);
            console.log("%c 🌽 firstPointer.next", "color:#93c0a4", firstPointer.next);
            console.log("%c 🥥 current", "color:#33a5ff", current);
            current.next = firstPointer.next
            console.log("\n-------------------------after assignment ------------------------------------")
            console.log("%c 🍖 firstpointer", "color:#7f2b82", firstPointer);
            console.log("\n%c 🥛 current.next", "color:#ed9ec7", current.next);
            console.log("%c 🍧 current", "color:#7f2b82", current);
            firstPointer.next = current
            console.log("%c 🍡 dummy", "color:#4fff4B", dummy)

            current = secondPointer;
            console.log("%c 🎂 current", "color:#33a5ff", current);

            console.log("\n-----------------------------------------------next iteration------------------------------------------------")
        }
        //   console.log("%c 🍓 dummy", "color:#3f7cff", dummy);
        dummy = dummy.next


        while (dummy !== null) {
            sorted.push(dummy.data)
            dummy = dummy.next
        }
        return sorted
    }

}


function sortList(node) {
    let dummy = new Node(0);
    let tail = dummy
    if (node == null || node.next == null) {
        return node
    }

    console.log(node)
    let mid = getMid(node)
    let left = sortList(node)
    console.log("%c 🍺 left", "color:#42b983", left);
    
    let right = sortList(mid)
    console.log("%c 🍔 right", "color:#b03734", right);
    console.log("----------- next execution -----------")
   
    while (left != null && right != null) {
        if (left.data < right.data) {
            tail.next = left;
            left = left.next;
            tail = tail.next;
        } else {
            tail.next = right;
            right = right.next;
            tail = tail.next;
        }

    }

    //  tail.next = (left != null) ? left : right;
     if(left != null ){
        tail.next=left
     }else{
        tail.next=right
     }
    return dummy.next
}



function getMid(node) {
    let midPrev = null
    while (node != null && node.next != null) {
       
        if(midPrev==null){
            midPrev=node
        }else{
            midPrev=midPrev.next;
        }
        node = node.next.next;
    }
    mid = midPrev.next
    midPrev.next = null
    return mid;
}



let queueLinkedList = new LinkedList();
let stackLinkedList = new LinkedList();

stackLinkedList.push(7);
stackLinkedList.push(8);
stackLinkedList.push(9);
stackLinkedList.push(10);
stackLinkedList.push(11);
stackLinkedList.push(12);
// console.log('original linkedList', stackLinkedList.traverse())

// stackLinkedList.pop();
// console.log('stackLInkedList', stackLinkedList.traverse(), "\n");

// console.log("-------------------------------------------")

// console.log("\nPrint all values from the linkedlist")
// stackLinkedList.forEach((number) => {
//     console.log("number: " + number)

// })
// console.log("------------------------------------------")


queueLinkedList.push(7);
queueLinkedList.push(2);
queueLinkedList.push(9);
queueLinkedList.push(10);
queueLinkedList.push(1);
// queueLinkedList.push(5);
// queueLinkedList.push(6);
// console.log('\noriginal linkedList',queueLinkedList.traverse())
// queueLinkedList.shift();
// queueLinkedList.shift();
// console.log("%c 🍎 queueLinkedList insertsort", "color:#f5ce50", queueLinkedList.insertSort());
console.log(sortList(queueLinkedList.head))

// console.log("%c 🍷 queueLinkedList", "color:#465975", mergeSort(queueLinkedList));
// let todisplay=mergeSort(queueLinkedList)

// displayAllData(todisplay)

//  console.log('queueLInkedList', queueLinkedList.head);

//  console.log("%c 🍎 queueLinkedList", "color:#6ec1c2", Merge(queueLinkedList.head,stackLinkedList.head));


// console.log("%c 🍺 bubble sort", "color:#465975", queueLinkedList.bubbleSort());
// console.log("%c 🍇 insert sort", "color:#7f2b82", queueLinkedList.insertSort());

