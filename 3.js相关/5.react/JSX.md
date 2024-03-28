#### 通过{props}往html中插入变量、表达式、函数
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
#### 添加属性
属性值若是字符串，则加上引号，若是对象或表达式，则加上{}.
` const element = <a href="https://www.legacy.reactjs.org"> link </a>; `
` const element = <img src={user.avatarUrl}></img>; `

#### 属性需要转换写法
class 需要写成 className
tabindex 需要写成 tabIndex

#### 若JSX元素没有子元素/节点，可以单闭合
` const element = <img src={user.avatarUrl} />; `