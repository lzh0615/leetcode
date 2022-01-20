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
var addTwoNumbers = function (l1, l2) {
  // let head = null
  // let tail = null
  // let carry = 0
  // while (l1 || l2) {
  //   const n1 = l1 ? l1.val : 0
  //   const n2 = l2 ? l2.val : 0
  //   const sum = n1 + n2 + carry
  //   if (!head) {
  //     head = tail = new ListNode(sum % 10)
  //   } else {
  //     tail.next = new ListNode(sum % 10)
  //     tail = tail.next
  //   }
  //   carry = Math.floor(sum / 10)
  //   if (l1) l1 = l1.next
  //   if (l2) l2 = l2.next
  // }
  // if (carry > 0) tail.next = new ListNode(carry)
  // return head
  let sum = 0
  let carry = 0
  let arr1 = []
  let arr2 = []
  let head = null
  let tail = null
  while (l1) {
    arr1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    arr1.push(l2.val)
    l2 = l2.next
  }
  let len = arr1.length > arr2.length ? arr1.length : arr2.length
  for (let i = 0; i < len; i++) {
    
    sum = arr1[i] + arr2[i] + carry
    carry = Math.floor(sum / 10)
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    len--
  }
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
