#### 数据类型
基本数据类型包括Undefined、Null、Boolean、String、Number、BigInt、Symbol。引用数据类型一种Object。
其中Number中有NaN、Infinity，
Object中包含Array、null。
注意包装类型

##### typeof
typeof返回的值都是字符串，并且都是小写
* Undefined返回'undefined'
* Boolean返回'boolean'
* String返回'string'
* Symbol返回'symbol、'
* Numeric：Number返回'number'，
* Bigint返回'bigint'
* Null、Object返回'object'
* function返回'function'

#### null
用===判断

#### undefined
推荐使用
`"undefined" === typeof variable`
ES3时代全局的 undefined 是能被重写的，现代浏览器依然可以作为变量名在局部上下文中声明，所以不推荐使用全等===来判断
特殊`typeof document.all // "undefined"`

#### Array
推荐使用Array.isArray判断
```
Array.isArray()
Object.prototype.toString.call(variable) === "[object Array]"
variable.constructor === Array
```

#### NaN、Infinity
Number中包含NaN、Infinity，如果想判断是否为这个两个特殊值需要进行以下方法：
* 判断一个值是否为NaN，可以利用NaN这个特殊的Number与所有其他值都不相等，包括它自己
```
typeof val === 'number' && val !== val
```
* 判断一个值是否为Infinity，以下三个条件都为true的值是Infinity
```
typeof val === 'number' && isFinite(val) === false && val === val
```

#### Object
constructor
instanceof
toString