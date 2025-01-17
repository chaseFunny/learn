# 通俗易懂 JavaScript 的 proxy

## 什么是 Proxy ？

Proxy 可以理解为在目标对象前架设了一层“拦截”，外界对该对象的访问都必须先通过这层拦截，因此提供了一种机制，可以在不直接修改对象的情况下，对对象的基本操作进行干预和自定义。

举个通俗的🌰，Proxy 就像公司老总的秘书，如果有什么事情需要找他，或者他要传达什么信息，都是通过这个秘书，那么这个秘书就是 Proxy，老总就是被代理的对象

## 如何使用 Proxy ？

基本用法

```javascript
const proxy = new Proxy(target, handler);
```
- target：被代理的**目标对象**，可以是任何类型的对象，包括数组、函数等。
- handler：一个**对象**，包含了各种“捕获器”（trap），用于拦截对目标对象的操作。

下面我们来看看有哪些常用的 trap：

> 捕获器是一些函数，当对代理对象执行特定操作时，这些函数会被调用，允许我们自定义这些操作的行为。常用的捕获器包括：

- get(target, property, receiver)：拦截属性读取操作。
- set(target, property, value, receiver)：拦截属性设置操作。
- has(target, property)：拦截 in 操作符。
- deleteProperty(target, property)：拦截 delete 操作符。
- ownKeys(target)：拦截 Object.getOwnPropertyNames、Object.getOwnPropertySymbols、Object.keys 等方法。
- apply(target, thisArg, argumentsList)：拦截函数调用。
- construct(target, argumentsList, newTarget)：拦截 new 操作符。

## 使用场景



## 注意

1. 我们要对代理的实例进行操作，代理才能生效，而不是原始对象



## 参考

1. [Proxy - ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/proxy)
2. 