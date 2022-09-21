
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
    
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    push(value){
        let node= new Node(value);
        if(!this.head){
            this.head=node;
            return value;
        }
        let pointer=this.head;
        while(pointer.next!==null){
            pointer=pointer.next;
        }
        pointer.next=node;
        return value;
        
    }
    
    shift(){
        if (!this.head)return null
        let currentHead =this.head
        let previousHead = this.head;
        this.head = currentHead.next;
        return previousHead.value = null;  
    }


    traverse(){
        if(!this.head)return[];
        if(!this.head.next)return[this.head.data];
        let collection=[]   
        let pointer=this.head
        while(pointer !== null){
            collection.push(pointer.data)
            pointer=pointer.next
        }
        return collection
    }

    pop(){
        if (!this.head)return null
        let pointer =this.head
        let last_node=null

        if (!this.head.next){
            last_node=this.head
            this.head=null
            return last_node.data
        }

       
        while (pointer.next !==null){
            if(!pointer.next.next){
                pointer=pointer
                last_node = pointer.next
                break
            }else{
                pointer =pointer.next
            }
        }

        pointer.next = null
        
        return last_node.data
    }
    forEach(callback){
        if(!this.head) return;
        
        let pointer = this.head;

        while (pointer !== null){
            callback(pointer.data);
            pointer = pointer.next
        }

        return;
    }
   
}




let queueLinkedList = new LinkedList();
let stackLinkedList = new LinkedList();

queueLinkedList.push(1);
queueLinkedList.push(2);
queueLinkedList.push(3);
queueLinkedList.push(4);
queueLinkedList.push(5);
queueLinkedList.push(6);
console.log('\noriginal linkedList',queueLinkedList.traverse())
queueLinkedList.shift();
console.log('queueLInkedList',queueLinkedList.traverse());

console.log("-------------------------------------------")

console.log("\nPrint all values from the linkedlist")
queueLinkedList.forEach((number)=>{
    console.log("number: "+number)

})
console.log("------------------------------------------")
stackLinkedList.push(7);
stackLinkedList.push(8);
stackLinkedList.push(9);
stackLinkedList.push(10);
stackLinkedList.push(11);
stackLinkedList.push(12);
console.log('original linkedList',stackLinkedList.traverse())

stackLinkedList.pop();
console.log('stackLInkedList',stackLinkedList.traverse(),"\n");




