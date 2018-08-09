#### for in 、for of、forEach的区别
#### for in 
* 遍历可枚举属性（内置构造函数的属性属于不可枚举属性，构造函数原型中继承的属性属于可枚举属性）
* 可以遍历数组、对象
* 枚举出的是索引
* 原型对象，以及数组对象本身属性值，都会枚举出来
* 使用hasOwnProperty、getOwnPropertyNames()、propertyIsEnumerable去掉原型对象，但数组本身的值去不掉
* dom组合需[].slice.call()，Array.from()进行数组转化
* 数组遍历不一定按次序访问元素
#### for of（es6）
* 迭代可迭代对象，Array，Map，Set，String，TypedArray，arguments，dom集合等
* 迭代出的是值
* break、continue、throw、return能中断循环
* 不要重用生成器

#### forEach
* 只能遍历数组
* 无法break或者return false中断
#### forEach()、map()
* forEach() 方法对数组的每个元素执行一次提供的函数。
* map()方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
#### 结论
纯对象的遍历，for..in
数组遍历，如果不需要知道索引，for..of迭代更合适，因为还可以中断；
如果需要知道索引，则forEach()更合适；
对于其他字符串，类数组，类型数组的迭代，使用for..of