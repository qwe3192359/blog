### this:
#### this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定
和函数声明的位置没有任何关系，只取决于函数的调用方式。

#### 默认绑定：this 为 window
函数调用模式：函数直接使用不带任何修饰的函数引用进行调用。
```
function fun(){
    console.log(this.a)
}
或
var fun = function(){
    console.log(this.a)
}

var a = 2;
fun();  //  2
```
#### 隐式绑定：this就指向这个对象
方法调用模式：如果一个函数是对象的一个属性，那么当这个函数被调用的时候，
这个函数就视为这个对象的一个方法，这种调用模式就成为了方法调用模式。

```
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2
```
对象属性引用链中只有最后一层会影响调用位置。
```
function foo() {
    console.log( this.a );
}
var obj2 = {
    a: 42,
    foo: foo
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.foo(); // 42
```
#### 隐式丢失：this还是默认绑定，指向window
虽然bar 是obj.foo 的一个引用，但是实际上，它引用的是foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的
函数调用，因此应用了默认绑定。
```
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a是全局对象的属性
bar(); // "oops, global"
```
参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，所以结果和上一个例子一样。
```
function foo() {
    console.log( this.a );
}
function doFoo(fn) {
// fn其实引用的是foo
fn(); // <-- 调用位置！
}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // a是全局对象的属性
doFoo( obj.foo ); // "oops, global"

```
#### 显式绑定
##### apply()、call()：函数的this会指向第一个参数
##### apply():
* 第一个参数是一个对象，它们会把这个对象绑定到this 
* 第二个参数：一个参数数组


apply可以将一个数组转为函数参数
apply()：在特定的作用域中调用函数，等于设置函数体内this对象的值
后面的参数是argmuments list
```
将数组转为函数的参数

function f(x, y, z) {
// ...
}
var args = [0, 1, 2];
f.apply(null, args);
```

参数：第一个参数是在其中运行函数的作用域，第二个参数是参数数组
call()：和apply一样，就是接收参数的方式不同，第一个参数一样，其余参数都是直接传递给函数
bind()
#### new绑定：this指向新生成的对象
构造器函数调用模式：
1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行[[原型]]连接。
3. 这个新对象会绑定到函数调用的this 。
4. 如果函数没有返回其他对象，那么new 表达式中的函数调用会自动返回这个新对象。


#### 严格模式、箭头函数，this由函数的调用决定
function foo() {
console.log( this.a );
}
var a = 2;
(function(){
"use strict";
foo(); // 2
})();
