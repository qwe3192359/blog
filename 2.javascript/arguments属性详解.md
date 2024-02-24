###描述
arguments 参数，即函数调用的时候传入函数的变量集合（非箭头函数）。 
这个集合具有 length 属性，表示集合内变量的个数。 并且集合中的变量可以根据下标索引被引用。 arguments看起来很像 JavaScript 中的 Array，但是它并不是 Array。可以通过 for 语句来进行遍历。 但是你要是用其他 Array 中的方法来调用 arguments，就会报错了。对arguments使用typeof会返回object。
######更改传入的参数
```
arguments[1] = 'new value';
```
######将arguments转为数组
```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015const 
args = Array.from(arguments);
```
###属性
* arguments.callee：指向当前执行的函数。
* arguments.length：指向传递给当前函数的参数数量。