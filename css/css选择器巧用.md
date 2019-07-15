#### 去掉最后一个元素样式
```
ul li {
     border: 1px solid #ccc;
}
ul li:last-child {
     border: 0;
}
```
#### 应用于除了最后一个的其他元素上
```
ul li:not(:last-child) {
     border: 1px solid #ccc;
}
```
#### 去掉第一个元素样式
```
ul li {
     border: 1px solid #ccc;
}
ul li:first-child {
     border: 0;
}
```
#### 应用于除了第一个的其他元素上
```
ul li:not(:first-child) {
     border: 1px solid #ccc;
}
```
#### 选择1到3的元素并显示
```
li {
   display: none;
}
li:nth-child(-n+3) {
   display: block;
}
或
li:not(:nth-child(-n+3)){
  display: none;
}
```