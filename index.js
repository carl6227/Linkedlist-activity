// const list={
//     head:null,
//     push:function(value){
//         const node = {
//             value,next:null
//         };
//         if(!this.head){
//             this.head=node;
//             return value;
//         }
//         let pointer =this.head;
//         while (pointer.next !==null){
//             pointer =pointer.next;
//         }
//         pointer.next=node;
//         return value;
//     },

    // insertIntheBegginning(node){
    //     node.next = this.head;   
    //     this.head = node;
    //     return this.head;
    // }
//     traverse:function(){
//         if(!this.head)return[];
//         if(!this.head.next)return [this.head.value];
//         let collection=[]
//         let pointer=this.head
//         while(pointer !== null){
//             collection.push(pointer.value)
//             pointer =pointer.next
//         }
//         return collection
//     },
//     pop:function (){
//         if (!this.head)return null
//         let pointer =this.head
//         let last_node=null

//         if (!this.head.next){
//             last_node=this.head
//             this.head=null
//             return last_node.value
//         }
//         while (pointer.next !==null){
//             if(!pointer.next.next){
//                 pointer=pointer
//                 last_node = pointer.next
//                 break
//             }else{
//                 pointer =pointer.next
//             }
//         }

//         pointer.next = null
        
//         return last_node.value
//     },
//     forEach: function(callback){
//         if(!this.head) return;
        
//         let pointer = this.head;

//         while (pointer !== null){
//             callback(pointer.value);
//             pointer = pointer.next
//         }

//         return;
//     }

// }

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// console.log(list)
// console.log('Array 0',list.traverse());
// list.pop();
// list.pop();
// console.log('Array 1',list.traverse())



