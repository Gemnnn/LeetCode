/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head){
        return false;
    }

    let current = head;
    let storedNumber = new Set();


    while(current){
        if(storedNumber.has(current)){
            return true;
        }
        storedNumber.add(current);
        current = current.next;
    }

    return false;

};

// Runtime 62ms, Memory 53.82MB
// Time Complexity: O(n)
// Space Complexity: O(n)