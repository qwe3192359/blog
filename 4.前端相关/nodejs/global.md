#### globalThis

* 浏览器中指向 window 全局对象，Node.js 中指向 global 对象

#### 全局变量

* __filename 表示当前正在执行的脚本文件的绝对路径。ESM中不能使用
  * fileURLToPath(import.meta.url); ESM中使用
  * import.meta.filename  node20.11
* __dirname 表示当前执行脚本所在目录的绝对路径。ESM中不能使用
  * path.dirname(__filename);
  * import.meta.dirname node20.11
* process
    * argv 返回一个数组，第一个参数是 Node 在机器上的位置，第二个参数是执行文件的绝对路径，后续参数都为用户传递的自定义参数
    * cwd() 获取当前工作目录的绝对路径
    * version 获取当前 Node 版本
    * platform：返回运行 Node.js 的操作系统平台
    * arch：获取 CPU 架构信息
 