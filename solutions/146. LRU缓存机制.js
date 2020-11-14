/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map() // map 存储映射
    this.list = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        return this.map.get(key)
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 容量达到上限
    if(this.list.length === this.capacity) {
        // 删除末尾的 key
        this.map.delete(this.list[this.capacity - 1])
        this.list.unshift(key)
        this.map.set(key, value)
    } else {
        this.list.unshift(key)
        this.map.set(key, value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 let obj = new LRUCache(2)
 obj.put(1, 1)
 obj.put(2, 2)
 obj.get(1)
 obj.put(3, 3)
 obj.get(2)
 obj.put(4, 4)
 obj.get(1)
 obj.get(3)
 obj.get(4)