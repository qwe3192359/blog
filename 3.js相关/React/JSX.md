#### 注意事项
* 只能返回一个根元素
  * 可以使用空的 `<> ... </>` 包裹
* 标签必须闭合
* 若JSX元素没有子元素/节点，可以单闭合
* 使用驼峰式命名法给大部分属性命名
  * tabindex 需要写成 tabIndex
  * css的class 需要写成 className
* 在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号

#### 使用JavaScript
* 在大括号内使用JavaScript
* 在双大括号传递对象
* style属性也可以使用对象，需使用驼峰命名法
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
<ul style={{ backgroundColor: 'black' }}>
```

#### 列表循环
对于列表中的每一个元素，你都应该传递一个字符串或者数字给 key，用于在其兄弟节点中唯一标识该元素

#### 条件渲染
不进行任何渲染需返回null

#### 响应事件
`onClick = {}`