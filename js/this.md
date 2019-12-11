### this:
* this是JavaScript的关键字之一。它是对象自动生成的一个内部对象，只能在对象内部使用。随着函数使用场合的不同，this的值会发生变化
* this是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this的绑定
和函数声明的位置没有任何关系，只取决于函数的调用方式。

#### 默认绑定：this 指向 window
函数调用模式：函数直接使用不带任何修饰的函数引用。
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
##### apply()、call()：this会指向第一个参数
* 第一个参数是一个对象，它们会把这个对象绑定到this 
如果传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作this 的绑定对象，这个原始值会被转换成它的对象
形式（也就是new String(..) 、new Boolean(..) 或者new Number(..) ）
* 第二个参数：
    * apply():一个参数数组
    * call()：其余参数都是直接传递给函数
```
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
};
foo.call( obj ); // 2
```
##### 硬绑定
```
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
};
var bar = function() {
    foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
// 硬绑定的bar不可能再修改它的this
bar.call( window ); // 2
```
##### bind()
* Function.prototype.bind()
* bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 简单的辅助绑定函数
function bind(fn, obj) {
    return function() {
        return fn.apply( obj, arguments );
    };
}


#### new绑定：this指向新生成的对象
构造器函数调用模式：
1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行[[原型]]连接。
3. 这个新对象会绑定到函数调用的this 。
4. 如果函数没有返回其他对象，那么new 表达式中的函数调用会自动返回这个新对象。
```
function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2

```

#### 优先级
new绑定>显式绑定>隐式绑定>默认绑定

#### 严格模式
如果使用严格模式（strict mode ），那么全局对象将无法使用默认绑定，因此this 会绑定到undefined ：
```
函数内部严格模式不影响
function foo() {
    console.log( this.a );
}
var a = 2;
(function(){
    "use strict";
    foo(); // 2
})();
```
#### 箭头函数：根据外层（函数或者全局）作用域来决定this
* 箭头函数的绑定无法被修改
```
function foo() {
    // 返回一个箭头函数
    return (a) => {
        //this继承自foo()
        console.log( this.a );
    };
}
var obj1 = {
    a:2
};
var obj2 = {
    a:3
};
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, 不是3！

```

#### 常见问题
```
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);        // ?
        var foo = function(){ 
            console.log(this.x);    
            }
        foo();                      // ?
    }
};
obj.f();
答案 ： 20 10
```
```
function foo(arg){
    this.a = arg;
    return this
};

var a = foo(1);
var b = foo(10);

console.log(a.a);    // ?
console.log(b.a);    // ?
答案 ： undefined 10
```

