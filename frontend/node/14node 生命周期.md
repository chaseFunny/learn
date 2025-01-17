# node 的生命周期

1） 运行 主函数（入口函数）
2）是否要进入事件循环：
1. 别的线程是否有事情要做，有没有任务没结束
2. 如果有事情要做，就进入事件循环
3. 如果没有事情要做，就不进入事件循环，结束

# 事件循环做的事情
1）timer：存放计时器的队列
2）pedding callbacks
3）idle prepare
4）poll：轮训的队列，除了 timers，checks 外的队列，绝大多数的队列都放在这里，依次执行队列，直到清空，否则等待其他队列出现回调，结束该阶段，进入下一段。当发现没有任何队列和需要等待的事件，就结束事件循环
5）check：检查阶段，使用 setImmediate 的队列会直接到这个队列，
6）close callbacks

每个阶段维护一个队列，等待事件触发
当到达阶段的时间，就执行队列中的事件，执行空，然后进入下一个队列

## 微队列：nextTick 和 promise
立即执行的队列，执行的优先级：nextTick > promise  

执行时机：每打算执行一个回调之前，必须要先清空 nextTick 和 promise 队列，然后再执行

## 为什么有这么多种立即执行的方式
目前可以实现异步执行的方式有：
1）setTimeout
2）setImmediate
3）process.nextTick
4）Promise
最开始是 setTimeout 和 setImmediate 但是这两个依然不是很快，当 poll 阻塞的时候就会出现问题，所以后来加入了 process.nextTick 和 Promise