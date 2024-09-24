# 流 `Flow` 的概念

在日常生活中我们可以见到各种各样的`映射`, 例如筛网, 玻璃等等

对于透明玻璃, 玻璃在光的集合上的定义是直接返回也就是
$f(x)=x$

对于有色玻璃, 在光的集合上的定义是对于满足条件$\lambda x.x为某个颜色的光$的光不吸收, 也就是
$\forall x为某个颜色的光, f(x)=x$

`Yuuka`借鉴了`流`的概念，我们可以定义一个在某处有定义的函数，使用

```ts
function define(lambda:e:any=>boolean, body:x=>any): boolean
```

来定义一个函数，在表达式lambda返回值为真时，body执行

每当事件流流入新的事件时，触发对应定义域上的函数的响应

例如:
```json
{
  type:"message"
  content:"hello!"
}
```
```ts
flow.define(e=>e.type==="message", (e)=>{
  console.log(e.content)
})
```

事件流入，`Yuuka`会检查有没有对应定义域的函数，也就是$\lambda x.(x.type的值为$"$message$"$)$为真时，对应函数运行


`Yuuka`使用事件流实现对应订阅派发功能，我们所有的工作都是由此展开，可以说流式设计是`Yuuka`的核心，实现流的框架是`Yuuka`的元框架
