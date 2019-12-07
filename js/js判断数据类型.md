基本数据类型包括Number，String，Boolean，Undefined，null，以及es6新增的Symbol。引用数据类型一种Object。
其中Number中有NaN、Infinity，Object中包含Array、null。
String，Boolean，Undefined和Symbol可以直接使用typeof操作符去判断数据类型。（以下val是需要进行判断的值）
函数的typeof的值为function。
typeof返回的值都是字符串，并且都是小写。
对正则表达式字面量的类型判断在某些浏览器中不符合标准：某些浏览器里返回object，某些浏览器里返回function

Number中包含NaN、Infinity，如果想判断是否为这个两个特殊值需要进行以下方法：
* 判断一个值是否为NaN，可以利用NaN这个特殊的Number与所有其他值都不相等，包括它自己
```
typeof val === 'number' && val !== val
```
* 判断一个值是否为Infinity，以下三个条件都为true的值是Infinity
```
typeof val === 'number' && isFinite(val) === false && val === val
```

Object中包含Array和null
* 判断是数组，以下两个条件都为true时这个值为数组
```
typeof val === 'object' && val.constructor === Array
```
* 判断是null，null转为Boolean为假值，可以利用这个特性去判断一个值是否为null
```
 typeof val === 'object' && !Boolean(val)
```