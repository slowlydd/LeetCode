/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let numL1 = getNumber(l1);
  let numL2 = getNumber(l2);
  let flag;
  let length;
  if (numL1.length > numL2.length) {
    flag = 0;
    length = numL1.length;
  } else {
    flag = 1;
    length = numL2.length;
  }
  let temp = 0;
  for (let i = 0; i < length; i++) {
    if (numL1[i] === undefined) {
      numL1[i] = 0;
    }
    if (numL2[i] === undefined) {
      numL2[i] = 0;
    }

    numL1[i] = numL2[i] + numL1[i] + temp;
    if (numL1[i] >= 10) {
      numL1[i] = numL1[i] % 10;
      temp = 1;
    } else {
      temp = 0;
    }
  }

  if (temp) {
    numL1[numL1.length] = 1;
  }
  let res = {
    l1: {}
  }
  res.l1 = new ListNode(numL1[0]);
  let p = res.l1;
  for (let i = 1; i < numL1.length; i++) {
    p.next = new ListNode(numL1[i]);
    p = p.next;
  }
  return res.l1;
};

function getNumber(list) {
  let num = [];
  while (list) {
    num.push(list.val);
    list = list.next;
  }
  return num;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

addTwoNumbers({
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}, {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
})