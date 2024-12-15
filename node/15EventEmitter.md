# EventEmitter

nodeJs 中事件管理的通用管理机制

## 创建

```js
const events = require("events");

const emitter = new events.EventEmitter();
```

## 事件监听

```js
function fn() {}
emitter.on("event", fn );
```

## 事件触发

```js
emitter.emit("event");
```

## 事件移除

```js
emitter.off("event", fn);
```

## once

只触发一次
```js
emitter.once("event", fn);
```
