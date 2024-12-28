/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head; 
    let count = 0;

    while(current){
        current = current.next;
        count++;
    }

    let middle = 0;

    if (count % 2 !== 0) {
        middle = Math.round(count / 2); 
    } else {
        middle = (count / 2) + 1;
    }
    let headCount = 1;

    while(head){
        if(headCount == middle){
            return head;
        }
        head = head.next;
        headCount++;
    }

    return null;

};

// Time Complexity: O(n)
// Space Complexity: O(1)
