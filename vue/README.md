
### vue
* 兼容ie8以上

#### vue实例el参数
* css选择器
* HTMLElement 实例
``` 
  new Vue({
    el: '#app',
    data: obj
  }) 
```
#### 插值
* 双向绑定：双大括号文本插值{{}} ,只能插入内容
`<span>Message: {{ msg }}</span>`
* 一次性插值：v-once
`<span v-once>这个将不会改变: {{ msg }}</span>`
* 插入html片段：v-html
`<span v-html="rawHtml"></span>`
* 在html里使用：v-bind
`<div v-bind:id="dynamicId"></div>`
* 使用表达式，每个绑定只能包含单个表达式
#### 指令
* 带有前缀v-的特殊特性
* 参数：指令之后的冒号表示
`<a v-bind:href="url">...</a>`
* 修饰符以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
`<form v-on:submit.prevent="onSubmit">...</form>`
* 缩写
    * v-bind缩写为：
     `<a :href="url">...</a>`
    * v-on缩写为@
    `<a @click="doSomething">...</a>`

#### 计算属性
* 代替模板的复杂逻辑
* 放在computed: {}
* 计算属性和方法的区别:计算属性会缓存值，只有依赖的值发生变化才会变化，方法每次都会执行
* 代替侦听属性
* 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 
```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
* 侦听器：数据变化时执行异步或开销较大的操作使用侦听器代替计算属性

#### Class绑定
* :class可以与class同时存在
* 对象语法：属性是否存在取决于数据属性是否为真,也可以把class都写在data里
` :class="{ active: isActive, 'text-danger': hasError }" `
* 数组语法：可以将多个样式对象应用到同一个元素上
` :class="[activeClass, errorClass]" `
* 三元表达式
`<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>`
* 嵌套，组件支持组件内部和使用组件的地方同时使用:class
`<div v-bind:class="[{ active: isActive }, errorClass]"></div>`
#### 绑定内联样式
* v-bind:style会自动侦测并添加相应的前缀
* 对象语法，也可以直接绑定一个样式对象
`<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`
```
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
* 数组语法
`<div :style="[{color: 'red'}]"></div>`
`<div v-bind:style="[baseStyles, overridingStyles]"></div>`
* 多重值：绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值
`<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`
#### 条件渲染
* v-if、v-else-if、v-else
* 可以使用<template>包裹，template并不会渲染
* v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。
* v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后
* 用 key 管理可复用的元素
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
* v-show：v-show渲染的元素会一直存在dom中，不支持template和v-else
* 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级

#### 列表渲染
* v-for 指令使用 item in items 语法，items 是源数据数组并且 item 是数组元素迭代的别名。
    * 第二个参数为当前项的索引
```
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
`(item, index) in items`
* of可以代替in，也可以使用<template>，组件使用v-for必须有key
* 迭代对象的属性
    * 第二个的参数为键名
    * 第三个参数为索引
    
`v-for="(value, key, index) in object"`
```
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```
* key,需要用v-bind绑定
`<div v-for="item in items" :key="item.id"><!-- 内容 --></div>`
* 数组更新检测，用数组索引修改、修改数组长度不会触发vue的检测
* 对象更改检测
    * Vue 不能检测对象属性的添加或删除
* 显示过滤
    * 计算属性
    * 方法
```
<li v-for="n in even(numbers)">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```
* 一段取值
```
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
结果
1 2 3 4 5 6 7 8 9 10
```
#### 事件处理
* v-on指令监听DOM事件，可以直接在写在v-on后面
`v-on:click="counter += 1"`
* 接收一个需要调用的方法名称，event参数为原生DOM事件
```
<button v-on:click="say">Say hi</button>
methods: {
    say: function (event) {
      alert(event)
    }
  }
```
* 带参数，用特殊变量 $event将原生DOM传入
```
<button v-on:click="say('hi', $event)">Say hi</button>
methods: {
    say: function (mesage,event) {
      
    }
  }
```
* 事件修饰符在事件后面加点v-on:click.stop
    * .stop：阻止单击事件继续传播
    * .prevent：提交事件不再重载页面
    * .capture： 添加事件监听器时使用事件捕获模式
    * .self：只当在 event.target 是当前元素自身时触发处理函数
    * .once：事件将只会触发一次
    * .passive：滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 `onScroll` 完成
* 按键修饰符，v-on 在监听键盘事件时添加按键修饰符，
`<input v-on:keyup.enter="submit">`
#### 表单输入绑定
* v-model在表弟那元素绑定
* v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值，在data里设置初值
* 单个复选框值为布尔值，多个为数组
* 单选为选中的value值
* 选择框为选中的option里的值
* 多选选择框为数组
* 复选框，true-value可以绑定为true值
```
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```
* 单选按钮
```
<input type="radio" v-model="pick" v-bind:value="a">
// 当选中时
vm.pick === vm.a
```
* 选项框的选项
```
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```
* 修饰符
    * lazy 修饰符，从而转变为使用 change 事件进行同步
    * .number自动将用户的输入值转为数值类型
    * .trim自动过滤用户输入的首尾空白字符
    
```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```


    
    
 
         
          