/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
    this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.stack2.length) {
        while(this.stack.length) {
            this.stack2.push(this.stack.pop())
        }
    }
    return this.stack2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.stack2.length) {
        while(this.stack.length) {
            this.stack2.push(this.stack.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stack.length || this.stack2.length) {
        return false
    } else {
        return true
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */