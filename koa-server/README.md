#  学习 koa 框架源码


``````
node app.js
``````



### Application源码解析
##### 模块依赖
- 原生依赖  event.Emitter until stream http
- 第三方工具依赖  
   koa-compose http-errors statues   
   koa-convert is-generator-function   
   depd only debug on-finished   
- 内置模块依赖 request responsse  context
#### 核心类Applications初始化配置
##### Koa-compose 
- 基于Promise的流称控制方式，对异步流程同步话，解决链式耦合
- 将输入数组中的函数以次调用
- 提供一个数组函数公用的上下问ctx
- 提供一个数组函数之间传来呢的next指针
##### 理解委托模式
- Javascript 事件委托 - 事件冒泡给父元素处理
- Javascript 行为模式 - 原型继承实现原型链
- delegates 外层暴露的对象将请求委托给内部的其他对象进行处理
- Koa使用委托的目的：拉齐使用体验，避免重复实力化req/res
##### compose
- 面向面向切面编程(AOP)
- 动态代理(模式)植入目标代码
- 洋葱模型-中间件模型
##### 构造请求响应语法糖
- Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象_proto_
- 使用getter/setter封装Node原生的requset/response
- 实现jquery式的属性使用
- 使用accept处理Http请求协议
