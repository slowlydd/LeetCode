/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let tempStack = [];
    while(this.stack.length !== 0) {
      // 取栈顶元素
      tempStack.push(this.stack[this.stack.length - 1]);
      // 出栈
      this.stack.length--;
    }
    let ele = tempStack[tempStack.length - 1];
    tempStack.length--;
    while(tempStack.length !== 0) {
      this.stack.push(tempStack[tempStack.length - 1]);
      tempStack.length--;
    }
    return ele;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let tempStack = [];
  while(this.stack.length !== 0) {
    // 取栈顶元素
    tempStack.push(this.stack[this.stack.length - 1]);
    // 出栈
    this.stack.length--;
  }
  let ele = tempStack[tempStack.length - 1];
  while(tempStack.length !== 0) {
    this.stack.push(tempStack[tempStack.length - 1]);
    tempStack.length--;
  }
  return ele;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */