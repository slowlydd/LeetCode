/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.list = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  this.list.push(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function () {
  let tempList = [];
  let temp;
  do {
    if (temp) {
      tempList.push(temp);
    }
    temp = this.list.shift();
  } while (this.list.length !== 0);
  this.list = tempList;
  return temp;
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function () {
  let tempList = [];
  let temp;
  do {
    if (temp) {
      tempList.push(temp);
    }
    temp = this.list.shift();
  } while (this.list.length !== 0);
  tempList.push(temp);
  this.list = tempList;
  return temp;
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  if (this.list.length === 0) {
    return true;
  } else {
    return false;
  }
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/