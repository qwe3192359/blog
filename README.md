### 目录
#### css
* [常用](./1.css/css常用.md)
* [基础](./1.css/基础.md)
  * em、vw、vh
* [宽高](./1.css/width.md)
  * width: auto;
    * 充分利用可用空间
    * fit-content包裹
    * min-content收缩最小
  * max-width设置图片最大宽度
  * box-sizing改变宽高作用细节
  * 宽高百分比计算给予内容区域，定位宽高计算相对于padding box
  * height:100%;父级得有生效的高度值
* [display](./1.css/display.md)
* [块级元素](./1.css/块级元素.md)
* [内联元素](./1.css/内联元素.md)
  * line-height
  * vertical-align
    * baseline：基线对齐，默认值，行内元素基线为x下边缘，替换元素为自身的下边缘
    * 只支持内联元素和table-cell元素
* [替换元素](./1.css/替换元素.md)
  * object-fit
  * object-position

* [content](./1.css/content.md)
  * 替换元素非替换元素的区别src、content
* [padding](./1.css/padding.md)
  * 相对于宽度计算
* [margin](./1.css/margin.md)
  * 负值
  * auto实现居中、右对齐
  * 与定位共同设置垂直居中
* box-sizing
* [float](./1.css/float.md)
* [overflow](./1.css/overflow.md)
  * html、textarea默认可以产生滚动条
* [position](./1.css/position.md)
  * absolute、fixed大小由位置决定
  * 

* z-index 
* [flex](./1.css/flex.md)
* [grid](./1.css/grid.md) 
* [文本](./1.css/文本.md)
  * 基线，字母x的下边缘
  * 
* [background](./1.css/background.md)
* [border](./1.css/border.md)
  * solid:实现，dashed:虚线
  * 默认颜色使用color颜色
  * 默认大小3px
* [border-radius](./1.css/border-radius.md)
* [outline轮廓](./1.css/outline.md)
* [box-shadow阴影](./1.css/box-shadow.md)
* [mask遮罩](./1.css/mask.md)
* clip-path
  * 实现不规则图形
* [表格](./1.css/表格.md)
* [表单](./1.css/表单.md)
  * label的for属性和表单的id
* 焦点元素
  * tabindex
* [光标状态](./1.css/常用css.md)
* [pointer-events指向事件](./1.css/常用css.md)
* [滚动条](./1.css/滚动条.md)
* [transition：过渡](./1.css/transition：过渡.md)
* [动画](./1.css/常用css.md)
* [transform：2D、3D转换](./1.css/transform.md)
  * 旋转
  * 平移
* pointer-events
* [color](./1.css/color.md)
* [filter](./1.css/filter.md)
* [选择器](./1.css/选择器.md)
* [伪元素](./1.css/伪元素.md)
* [伪类](./1.css/伪类.md)
* [自适应与响应式](./1.css/自适应与响应式.md)
  * meta设置
  * 媒体查询
#### css相关
* sass
* postcss
* TailwindCSS 
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
    * search() 第一个与之匹配的子串的起始位置，如果没有则返回-1
    * slice() 截取字符串
    * toLowerCase() 转换为小写
    * toUpperCase() 转换为大写
    * trim() 去除开头和结尾的空格
* 数字
  * 静态方法
    * Number.isNaN() 判断传入的值是否为 NaN
  * 常用实例方法
    * toFixed() 截取小数点后的位数
* 数组
  * 静态方法
    * Array.isArray() 如果参数是数组则返回 true ，否则返回 false
    * Array.of()  创建一个数组，传入的参数一定都是数组的成员
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
  * async/await
* 对象
* 正则
  * test() 是否存在某个字符串，返回 true 或 false
  * exec() 发现匹配，就返回一个数组，成员是每一个匹配成功的子字符串，否则返回null。   
* 全局对象
  * Date
* BOM
  * [window](./js/window.md)
  * history
  * location
  * navigator
  * screen
* DOM
  * clientWidth:包括padding，不包括border
  * offsetWidth:包含padding和border
* 事件
* 数据格式及处理
* canvas
* 数据储存
* 设计模式
* 数据结构
* [for in 、for of、forEach的区别](./js/for...in、for...of.md)
* [在iframe里就重定向顶级窗口](./js/在iframe里就重定向顶级窗口.md)
* [this的指向](./js/this.md)
#### js相关
* es6
* TypeScript
* websocket
* vue
  * vue-router
  * pinia
  * vue-use
  * element-plus
  * vant
* react
  * Ant Design
* selvet
* 常用工具插件
  * lodash
  * Day.js
* jQuery
* mock.js
* 常用插件
  * axios
  * ECharts
  * antv
  * D3.js
* webgl、gis
  * leaflet
  * three.js
  * cesium
  * BabylonJs
  * OpenLayer
* monaco-editor 在线代码编辑器
* 文件操作
  * file-saver
  * tesseract.js 图文识别
  * sheet.js   xlsx
  * mammoth.js word
#### 前端相关
* git
  * git config core.ignorecase false  让git不忽略大小写
* svn
* Node、Bun、Deno
* npm、pnpm、yarn
  * depcheck 依赖检查
* webpack、vite、turbo
* nginx、tomcat、apache
* 小程序
* uniapp、flutter
* vs code插件
  * live-server
#### 前端工程化
* ESLint 
* Perttier
* Vitest
* 命名规范
* 埋点系统
* 监控和报警系统
#### JAVA
#### JAVA相关
* spring
* mysql
* redis
#### 其他
* [目录的写法](./other/目录的写法.md)
* [事件循环](./other/事件循环.md)
  * 进程和线程
  * 消息队列
* [浏览器渲染](./other/浏览器渲染.md)

#### AI
* MarsCode 