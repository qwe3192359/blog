#### 注意事项
* 只能返回一个根元素
  * 可以用 <> 和 </> 元素来代替
* 标签必须闭合
* 若JSX元素没有子元素/节点，可以单闭合
* 使用驼峰式命名法给大部分属性命名
  * 例如tabindex 需要写成 tabIndex
* css的class 需要写成 className

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