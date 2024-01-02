```
去掉列表的圆点 ul{ list-style: none; } 
去下划线 text-decoration: none; 
加下划线 text-decoration: underline; 
加小手 cursor: pointer; 
表单点击无效果 outline: none; 
无色关键字 transparent 
合并表格边框 border-collapse:collapse; 
单行文字超出显示省略号 
overflow: hidden; text-overflow: ellipsis; white-space: nowrap; 
多行文字超出显示省略号 
overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
```
flex
```
两端对齐：justify-content: space-between;
水平居中：justify-content: center;
垂直居中：align-items: center;
垂直排列：flex-direction: column;

不会放大和缩小：flex: none;
子元素平分剩余空间：flex-grow: 1;
子元素不缩小：flex-shrink: 0;
```