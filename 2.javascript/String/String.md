#### 字符编码
* Unicode：国际编码标准，为每个符号指定一个编号，叫做"码点"
* 码元：构成字符编码的基本单位，JavaScript的码元就是经过UTF-16的编码的整数，UTF-16编码后只可能是2byte或4byte的，所以一个Unicode字符在JavaScript字符串中可能占据1个码元也可能占据2个
* 字体：映射Unicode码点，显示对应的字形

#### String
* 部分方法的参数都是指码元的位置，都会受到双码元的影响，例如charAt、at、substring、slice等
* JavaScript允许直接用码点表示Unicode字符，写法是"反斜杠+u+码点"
* 4字节的码点要将码点放在大括号内 `'\u{1D306}'`

#### 静态方法
* String.fromCharCode()
返回由指定的 UTF-16 码元序列创建的字符串
* String.fromCodePoint()
根据指定的码位序列返回一个字符串

#### 实例方法
* at() 
方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个UTF-16码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数
* charAt(pos: number): string;
返回指定 index 处的字符
* charCodeAt()
返回一个数字，它是给定 index 处的 UTF-16 码元值。
* codePointAt()
返回一个非负整数值，它是从指定位置（pos）开始的 UTF-16 编码码位的码位值
* concat()
合并两个（或更多）字符串的文本并返回一个新字符串
* endsWith()
确定字符串是否以字符串 searchString 的字符结尾。
* includes()
确定调用字符串是否包含 searchString

  
#### 实例属性
* length 
表示字符串的 UTF-16 码元长度

#### 遍历字符串，不受双字节字符影响
```
for (let s of string ) {
  // ...
}
```