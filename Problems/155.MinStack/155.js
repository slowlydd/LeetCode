/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.val = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.val[this.val.length] = x;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.val.length--;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.val[this.val.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if(this.val.length === 0) {
      return null;
  }
  if(this.val.length === 1) {
      return this.val[0];
  }
  let min = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < this.val.length; i++) {
      if(this.val[i] < min) {
          min = this.val[i];
      }
  }
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/