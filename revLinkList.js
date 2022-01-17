var reverseList = function(head) {
    let currentNode = head;
    let prev = null;
    
    while(currentNode){
        let temp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = temp
    }
    
    return prev;
};
