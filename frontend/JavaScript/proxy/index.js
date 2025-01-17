// JavaScript proxy 体验

// 1. 代理对象
let obj = {
  name: '张三',
  age: 18
}

let proxy = new Proxy(obj, {
  get(target, key) {
    console.log('get', key)
    return target[key]
  },
  set(target, key, value) {
    console.log('set', key, value)
    target[key] = value
  },
  has: function (target, key) { 
    console.log('hasOwnProperty', key)
    return key in target
  }
})

console.log(proxy.name) // get name 张三
console.log(proxy.hasOwnProperty('name'));
console.log('name' in proxy) // get hasOwnProperty name true;
