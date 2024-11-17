/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null; 
    }

    let currentA = headA;
    let currentB = headB;

    while (currentA) {
        currentB = headB; 
        while (currentB) {
            if (currentA === currentB) { 
                return currentA; 
            }
            currentB = currentB.next;
        }
        currentA = currentA.next;
    }

    return null; 
};

// Time Complexity: O(m×n)
// Space Complexity: O(1)