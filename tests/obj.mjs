// 在chrome dev tools 中对象原型链中的get和set全部会被提取到顶层
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

const obj1 = {
  log1: ['a', 'b', 'c'],
  get lates1t() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

const obj2 = {
  log2: ['a', 'b', 'c'],
  get latest2() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

Object.setPrototypeOf(obj1, obj0)
Object.setPrototypeOf(obj2, obj1)

console.log('==========>', obj2)