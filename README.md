### 目录

#### css

* [常用](./1.css/css常用.md)
* [基础](./1.css/基础.md)
  * em、vw、vh
* [宽高](./1.css/width.md)
  * width: auto;
    * 充分利用可用空间
    * fit*content 包裹
    * min*content 收缩最小
  * max*width 设置图片最大宽度
  * box*sizing 改变宽高作用细节
  * 宽高百分比计算给予内容区域，定位宽高计算相对于 padding box
  * height:100%;父级得有生效的高度值
* [display](./1.css/display.md)
* [块级元素](./1.css/块级元素.md)
* [内联元素](./1.css/内联元素.md)
  * line*height
  * vertical*align
    * baseline：基线对齐，默认值，行内元素基线为 x 下边缘，替换元素为自身的下边缘
    * 只支持内联元素和 table*cell 元素
* [替换元素](./1.css/替换元素.md)
  * object*fit
  * object*position
* img
  * sizes
  * srcset
* [content](./1.css/content.md)
  * 替换元素非替换元素的区别 src、content
* [padding](./1.css/padding.md)
  * 相对于宽度计算
* [margin](./1.css/margin.md)
  * 负值
  * auto 实现居中、右对齐
  * 与定位共同设置垂直居中
* box*sizing
* [float](./1.css/float.md)
* [overflow](./1.css/overflow.md)
  * html、textarea 默认可以产生滚动条
* [position](./1.css/position.md)

  * absolute、fixed 大小由位置决定
  *

* z*index
* [flex](./1.css/flex.md)
* [grid](./1.css/grid.md)
* [文本](./1.css/文本.md)
  * 基线，字母 x 的下边缘
  *
* [background](./1.css/background.md)
* [border](./1.css/border.md)
  * solid:实现，dashed:虚线
  * 默认颜色使用 color 颜色
  * 默认大小 3px
* [border*radius](./1.css/border*radius.md)
* [outline 轮廓](./1.css/outline.md)
* [box*shadow 阴影](./1.css/box*shadow.md)
* [mask 遮罩](./1.css/mask.md)
* clip*path
  * 实现不规则图形
* [表格](./1.css/表格.md)
* [表单](./1.css/表单.md)
  * label 的 for 属性和表单的 id
* 焦点元素
  * tabindex
* [光标状态](./1.css/常用css.md)
* [pointer*events 指向事件](./1.css/常用css.md)
* [滚动条](./1.css/滚动条.md)
* [transition：过渡](./1.css/transition：过渡.md)
* [动画](./1.css/常用css.md)
* [transform：2D、3D 转换](./1.css/transform.md)
  * 旋转
  * 平移
* pointer*events
* [color](./1.css/color.md)
* [filter](./1.css/filter.md)
* [选择器](./1.css/选择器.md)
* [伪元素](./1.css/伪元素.md)
* [伪类](./1.css/伪类.md)
* [自适应与响应式](./1.css/自适应与响应式.md)
  * meta 设置
  * 媒体查询

#### css 相关

* sass、less
* postcss
* TailwindCSS
* shadcn*ui

#### js

* 运算符
  * ？？ 如果引用是空值（null 或 undefined），可选链运算符将返回 undefined 而不是导致错误
  * ？. 当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
* 数据类型
  * Undefined、Null、Boolean、String、Symbol、Numeric 和 Object
  * [判断数据类型](./2.javascript/js判断数据类型.md)
* [字符串](./2.javascript/String/String.md)

  * 注意码元
  * 常用实例方法

    * includes() 是否存在某个字符串，返回 true 或 false，不支持正则
    * replaceAll() 匹配并替换字符
    * split() 分割字符串并返回该数组，注意空字符串分割

    * endsWith() 是否以指定字符串结尾，返回 true 或 false
    * startsWith() 是否以指定字符串开头，返回 true 或 false
    * search() 第一个与之匹配的子串的起始位置，如果没有则返回*1
    * slice() 截取字符串
    * toLowerCase() 转换为小写
    * toUpperCase() 转换为大写
    * trim() 去除开头和结尾的空格

* 数字
  * 静态方法
    * Number.isFinite() 判断传入的值是否为有限数，参数不会转换为数字，全局函数 isFinite() 会将参数转换为数字
    * Number.isNaN() 判断传入的值是否为 NaN
  * 常用实例方法
    * toFixed() 截取小数点后的位数
* 数组
  * 静态方法
    * Array.isArray() 如果参数是数组则返回 true ，否则返回 false
    * Array.of() 创建一个数组，传入的参数一定都是数组的成员
  * 常用实例方法
    * push() pop() unshift() shift()
    * 循环
      * forEach()
      * map() 返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果
      * keys() 返回一个新的数组迭代器，其中包含调用数组中每个索引的键
      * entries() 返回一个新的数组迭代器对象，其中包含数组中每个索引的键/值对
      * values() 返回一个新的数组迭代器对象，该对象包含数组中每个索引的值。
    * splice() 从数组中添加和/或删除元素。
    * sort() 对数组的元素进行排序并返回该数组。
    * every() 数组中的每个元素都满足测试函数，则返回 true
    * some() 如果调用数组中至少有一个元素满足提供的测试函数，则返回 true。
    * filter() 返回一个新数组，其中包含调用所提供的筛选函数返回为 true 的所有数组元素
    * find() 返回数组中满足提供的测试函数的第一个元素的值，如果没有找到合适的元素，则返回 undefined
    * includes() 确定调用数组是否包含一个值，根据情况返回 true 或 false
    * join() 将数组的所有元素连接为字符串。
* [函数](./2.javascript/Function/Function.md)
  * [this](./2.javascript/Function/this.md)
  * new
  * 箭头函数
  * async/await
  * 实例方法
    * apply() 调用一个具有给定 this 值的函数，以及作为一个数组（或类似数组对象）提供的参数。
    * call() 调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
    * bind() 创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
* 对象
* 正则
  * test() 是否存在某个字符串，返回 true 或 false
  * exec() 发现匹配，就返回一个数组，成员是每一个匹配成功的子字符串，否则返回 null。
* 常用内置对象

  * [Date](./2.javascript/Date.md)
    * 注意时区问题
    * Date.now() 当前时间的时间戳
    * new Date()
      * 月份从 0（1 月）到 11（12 月）
      * date 传 0 的时候，取到的是上个月的最后一天
      * new Date(2024, 1, 0).getDate() 获取上个月有多少天
    * Date.prototype.getTime() 返回时间戳
    * Date.prototype.toLocaleString() 返回本地时间格式
  * JSON
  * Math
  * Map
  * Proxy
  * Reflect
  * Promise
  * Symbol
  * Set
  * WeakSet
  * Map
  * WeakMap
  * PerformanceObserver
  * import

    * 动态导入

  * 异步
    * xhr、fetch
    * setTimeout
    * setInterval
    * setImmediate
    * requestAnimationFrame
    * requestIdleCallback
    * Promise
    * async/await
    * Generator
    * 流式读取

* BOM
  * [window](./2.javascript/window.md)
  * history
  * location
  * navigator
  * screen
* DOM
  * clientWidth:包括 padding，不包括 border
  * offsetWidth:包含 padding 和 border
* 事件
  * addEventListener
  * submit：form 元素的提交事件，配合按钮 type 为 submit 时使用
* canvas
* 数据储存
  * localStorage
  * sessionStorage
  * Cookie
  * IndexedDB
* websocket
* [在 iframe 里就重定向顶级窗口](./2.javascript/在iframe里就重定向顶级窗口.md)

#### js 相关

* nodejs
  * path 处理路径
  * import.meta 当前文件名、目录等 
  * url 解析url
  * os 拿到系统信息
  * stream：流相关的 api
  * http
  * fs 文件、目录的增删改查
  * zlib 用于 http 服务的 deflate、gzip、br 等压缩算法
  * crypto：加密、产生随机数
  * buffer：用来操作二进制数据
  * util：一些工具方法
  * sqlite：内置的 sqlite 数据库
  * readline：按行读取输入流，可以读取文件、读取用户输入（类似 repl）、还可以处理键盘事件
* TypeScript
* vue 原理
  * 响应式系统
  * Composition API
  * 组件解析、编译、渲染
  * 虚拟 DOM、diff 算法
  * 指令、插槽、props
  * 生命周期
* vue
  * vue*router
  * pinia
  * vue*use
  * element*plus
  * vant
* react 原理
  * 虚拟 DOM、fiber、diff 算法
  * jsx
  * hooks
  * 生命周期
* react
  * Ant Design
* Svelte
* SolidJS
* Qwik
* Astro
* 常用插件
  * lodash
  * dayjs、Date*fns
  * axios
  * mock.js
  * ECharts
  * antv
  * D3.js
* webgl、gis
  * leaflet
  * three.js
  * cesium
  * BabylonJs
  * OpenLayer
* monaco*editor 在线代码编辑器
* 文件操作
  * file*saver
  * tesseract.js 图文识别
  * sheet.js xlsx
  * mammoth.js word
* 跨平台 Electron、Tauri

#### 前端相关

* [git](./4.前端相关/git.md)
  * git config core.ignorecase false 让 git 不忽略大小写
* [nvm](./4.前端相关/nvm.md)
* Node、Bun、Deno
* npm、pnpm、yarn

* 常用 npm 包
  * depcheck 依赖检查
  * [nrm](./4.前端相关/nrm.md)

* webpack、turbo
* [vite](./4.前端相关/vite.md)
* nginx、tomcat、apache
  * [nginx](./4.前端相关/nginx.md)
* 小程序
* uniapp、flutter
* vs code 插件
  * live*server

#### 前端工程化

* ESLint
* Perttier
* Vitest
* 命名规范
* 埋点系统
* 监控和报警系统
* Monorepo
* 打包自动化
* 代码版本管理
* 发布管理

#### JAVA

#### JAVA 相关

* spring
* mysql
* redis

#### 其他

* [目录的写法](./other/目录的写法.md)
* [事件循环](./other/事件循环.md)
  * 进程和线程
  * 消息队列
* [浏览器渲染](./other/浏览器渲染.md)
* [markdown](./other/Markdown.md)
* 设计模式
* 数据结构

#### AI

* MarsCode

#### 面试题

BFC
手写 promise
async
防抖节流
重排重绘
事件循环机制
浏览器渲染
闭包
原型链
箭头函数
深拷贝
跨域
浏览器缓存
事件委托
前端埋点
权限控制
Reflect.apply

####
