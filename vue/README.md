
### vue的使用

#### 声名式渲染el
* css选择器
* HTMLElement 实例
* {{}}或v-bind绑定数据和DOM
#### 条件
* v-if
#### 列表
* v-for
#### 处理用户输入(事件)
* v-on
* v-model表单输入
#### 生命周期

#### 指令

#### 计算属性
* computed: {}
* 计算属性和方法的区别（缓存）
* 计算属性和侦听属性
* 计算属性的setter
* 侦听器

#### Class 与 Style 绑定
##### 对象语法
* 属性是否存在取决于数据属性是否为真
` v-bind:class="{ active: isActive, 'text-danger': hasError }" `
##### 数组语法
` v-bind:class="[activeClass, errorClass]" `
* 三元表单
`<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>`
##### 绑定内联样式
* 对象语法
* 数组语法
* 多重值

#### 条件渲染
* v-if、v-else-if、v-else
* v-show

#### 列表渲染
         
          