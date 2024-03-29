var MyHashMap = function () {
  this.base = 1000
  this.data = new Array(this.base).fill(0).map(i => new Array())
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) return i[1] = value
  }
  this.data[hash].push([key, value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) return i[1]
  }
  return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) {
      this.data[hash].splice(this.data[hash].indexOf(i), 1)
      return
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


// leetcode 参考
// var MyHashMap = function () {
//   this.map = {};
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// MyHashMap.prototype.put = function (key, value) {
//   this.map[key] = value;
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// MyHashMap.prototype.get = function (key) {
//   if (this.map.hasOwnProperty(key)) {
//     return this.map[key];
//   }
//   return -1;
// };

// /** 
// * @param {number} key
// * @return {void}
// */
// MyHashMap.prototype.remove = function (key) {
//   delete this.map[key];
// };

// /**
// * Your MyHashMap object will be instantiated and called as such:
// * var obj = new MyHashMap()
// * obj.put(key,value)
// * var param_2 = obj.get(key)
// * obj.remove(key)
// */
