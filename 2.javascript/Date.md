#### new Date
* 没有参数：返回当前时间
* Unix 时间戳
* 时间戳字符串
* 传入日期和时间的每一个参数
  * year
    * 0 到 99 会被映射至 1900 年至 1999 年，其他值代表实际年份
  * monthIndex
    * 月份从 0（1 月）到 11（12 月）
  * date
    * 表示一个月中的第几天的整数值，从 1 开始。默认值为 1
    * 当你 date 传 0 的时候，取到的是上个月的最后一天
    * new Date(2024, 1, 0).getDate() 获取上个月有多少天
  * hours 可选
    * 表示一天中的小时数的整数值 (24 小时制)。默认值为 0（午夜）。
  * minutes 可选
  * seconds 可选
  * milliseconds 可选

#### 静态方法
* Date.now() 返回当前时间的时间戳
* Date.parse() 解析时间字符串，返回时间戳，不建议使用

#### 实例属性
* toLocaleString() 返回本地时间格式
* toLocaleDateString() 返回本地日期格式
* toLocaleTimeString() 返回本地时间格式

* getTime() 返回时间戳
* getFullYear() 返回年份
* getMonth() 返回月份 0–11，0 表示一年中的第一月
* getDate() 返回日期
* getDay() 返回星期几 0-6，0 表示星期天
* getHours() 返回小时
* getMinutes() 返回分钟
* getSeconds() 返回秒
* getMilliseconds() 返回毫秒

