/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let copyNode = new ListNode();
    let head = copyNode;
    let addIn = 0;

    while(l1 !== null || l2 !== null){
        let sum = addIn;

        if (l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum > 9){
            addIn = 1;
        } else{
            addIn = 0;
        }

        let onesPlace = sum % 10;

        head.next = new ListNode(onesPlace);
        head = head.next;
    }

    if (addIn > 0) {
        head.next = new ListNode(addIn);
    }

    return copyNode.next;
};

// Time complexity : O(max(m, n))
// Space complexity : O(max(m, n))
