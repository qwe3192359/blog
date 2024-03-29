#### export
export命令规定模块的对外接口。export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错。可以输出变量、函数、类（class）。export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
```js
分开输出三个变量
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
输出一组变量，与上面等价
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
输出函数
export function multiply(x, y) {
    return x * y;
};
重新命名
function v1() { ... }
function v2() { ... }

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};
```
#### import
import命令输入的变量都是只读的，不能重新赋值，如果是对象可以改变对象的属性，其他模块也会读到该写的值，不建议这么做。import命令具有提升效果，会提升到整个模块的头部，首先执行。由于import是静态执行，所以不能使用表达式和变量，
```js
加载profile.js文件，并从中输入变量。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
import { firstName, lastName, year } from './profile.js';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
重新命名
import { lastName as surname } from './profile.js';
执行lodash模块
import 'lodash';
模块的整体加载
export function area(radius) {
  return Math.PI * radius * radius;
}
export function circumference(radius) {
  return 2 * Math.PI * radius;
}

import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```
#### export default
模块指定默认输出，其他模块加载该模块时，import命令可以为该匿名函数指定任意名字，不需要使用大括号。一个模块只能使用一次
```js
export default function () {
  console.log('foo');
}

import customName from './export-default';
customName(); // 'foo'

export default function foo() {
  console.log('foo');
}

function foo() {
  console.log('foo');
}
export default foo;
两种写法等同
```
