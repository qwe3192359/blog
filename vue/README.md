
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
##### :class可以与class同时存在
##### 对象语法
* 属性是否存在取决于数据属性是否为真,也可以把class都写在data里
` :class="{ active: isActive, 'text-danger': hasError }" `
##### 数组语法
` :class="[activeClass, errorClass]" `
* 三元表达式
`<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>`
* 嵌套，组件支持组件内部和使用组件的地方同时使用:class
`<div v-bind:class="[{ active: isActive }, errorClass]"></div>`
##### 绑定内联样式
* 对象语法
* 数组语法
* 多重值

#### 条件渲染
* v-if、v-else-if、v-else
* v-show

#### 列表渲染
         
          