#### CommonJS

##### 导出模块

- 只使用 module.exports 导出模块代码

##### 导入模块

- require

```
// 一个一个导出
module.exports.userInfo = {
  name: 'forever',
  age: 18
}
```

```
// 将函数和对象统一导出到模块的外部
module.exports = {
  hello,
  byebye,
  userInfo
}
```

```
exports.userInfo = {
  name: 'forever',
  age: 18
}
```

```
// 导入模块
const context = require('./exports')
context.hello(context.userInfo.name)
// 解构导入
const { hello, userInfo, byebye } = require('./exports')
```
