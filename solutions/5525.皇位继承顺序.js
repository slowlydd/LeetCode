/**
 * @param {string} kingName
 */
const map = new Map()
var ThroneInheritance = function(kingName) {
  this.name = kingName
  this.children = []
  map.set(kingName, this)
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  const node = map.has(parentName) ? map.get(parentName) : null
  if(node) node.children.push(new ThroneInheritance(childName))
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  const node = map.has(name)? map.get(name): null
  if(node) node.isDeath = true
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  const res = []
  recursion(this, res)
  return res
};

function recursion(node, res) {
  if(!node) return
  if(!node.isDeath) res.push(node.name)
  for(let i = 0, l = node.children.length; i < l; i++) {
    recursion(node.children[i], res)
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */