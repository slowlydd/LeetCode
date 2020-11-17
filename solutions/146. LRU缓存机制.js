function ListNode(key, val) {
    this.key = key
    this.val = val
    this.pre = this.next = null
}

LRUCache.prototype.removeNode = function (node) {
    let preNode = node.pre
    nextNode = node.next
    preNode.next = nextNode
    nextNode.pre = preNode
}

LRUCache.prototype.appendHead = function (node) {
    let firstNode = this.head.next
    this.head.next = node
    node.pre = this.head
    node.next = firstNode
    firstNode.pre = node
}

LRUCache.prototype.removeTail = function() {
    let key = this.tail.pre.key
    this.removeNode(this.tail.pre)
    return key
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.data = {}
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.pre = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.data[key] !== undefined) {
        let node = this.data[key]
        this.removeNode(node)
        this.appendHead(node)
        return node.val
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
    let node
    if(this.data[key] !== undefined) {
        node = this.data[key]
        this.removeNode(node)
        node.val = value
    } else {
        node = new ListNode(key, value) 
        this.data[key] = node
        if(this.size < this.capacity) {
            this.size++
        } else {
            key = this.removeTail()
            delete this.data[key]
        }
    }
    this.appendHead(node)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */