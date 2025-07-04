##### nodejs 中使用

- 使用 .mjs 作为文件后缀名 (例如 hello.mjs)

* package.json 中 type 字段设置为 module

##### 导出导出模块

- 默认导入导出 (export default，import xx from 'module')；
- 具名导入导出 (export xx，import { xx } from 'module')；
- 导入导出所有 (export _，import _ as xx from 'module')；
- 重新导出 (export { xx } from 'module'，export \* from 'module')。

#### 区别

- CJS 支持动态加载模块 (require 语句可以出现在任意位置)，ESM 会在所有模块都加载完毕后才执行代码 (通常会将 import 导入语句放在模块的顶部)

* CommonJS 模块输出的是值的拷贝，而 ESM 模块输出的是值的引用。
