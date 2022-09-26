
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
          let sorted=[]
          let current= this.head

        
          while(current!=null){
            let secondPointer=current.next
            let firstPointer=dummy;
            while(firstPointer.next && firstPointer.next.data<current.data){
                firstPointer=firstPointer.next
            }
            current.next=firstPointer.next
            firstPointer.next=current
            current=secondPointer;
          }
           dummy=dummy.next
        
        while(dummy!==null){
              sorted.push(dummy.data)
              dummy=dummy.next
        }
        return sorted
    }

}

 
function Merge(firstnode,secondnode){
    let temp = []
    if(firstnode==null){
       return secondnode
    }
    if(secondnode==null){
        return firstnode
    }
    let currentnode=null;
    if(firstnode.data<=secondnode.data){
        currentnode=firstnode;
        currentnode.next=Merge(firstnode.next,secondnode);
    }else{
        currentnode=secondnode
        currentnode.next=Merge(firstnode,secondnode.next)
    }
//     while(currentnode!==null){
//         temp.push(currentnode.data)
//         currentnode=currentnode.next
//   }
  return currentnode.next

}

function mergeSort( head) {
    // Base case : if head is null
    if (head == null || head.next == null) {
        return head;
    }

    // get the middle of the list
    var middle = getMiddle(head);
    var nextofmiddle = middle.next;

    // set the next of middle node to null
    middle.next = null;

    // Apply mergeSort on left list
    var left = mergeSort(head);

    // Apply mergeSort on right list
    var right = mergeSort(nextofmiddle);

    // Merge the left and right lists
    var sortedlist = Merge(left, right);
    return sortedlist;
}

function getMiddle( head) {
    if (head == null)
        return head;

    var slow = head, fast = head;
    console.log("%c 🍋 slow", "color:#2eafb0", slow);

    while (fast.next != null && fast.next.next != null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function displayAllData(node){
    while(node!=null)
    console.log(node.data)
    node=node.next
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
queueLinkedList.push(5);
queueLinkedList.push(6);
// console.log('\noriginal linkedList',queueLinkedList.traverse())
// queueLinkedList.shift();
// queueLinkedList.shift();
console.log("%c 🍎 queueLinkedList insertsort", "color:#f5ce50", queueLinkedList.insertSort());

// console.log("%c 🍷 queueLinkedList", "color:#465975", mergeSort(queueLinkedList));
// let todisplay=mergeSort(queueLinkedList)

// displayAllData(todisplay)

//  console.log('queueLInkedList', queueLinkedList.head);

//  console.log("%c 🍎 queueLinkedList", "color:#6ec1c2", Merge(queueLinkedList.head,stackLinkedList.head));


// console.log("%c 🍺 bubble sort", "color:#465975", queueLinkedList.bubbleSort());
// console.log("%c 🍇 insert sort", "color:#7f2b82", queueLinkedList.insertSort());

