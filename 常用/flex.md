### 常用
两端对齐：justify-content: space-between;
垂直居中：align-items: center;
水平居中：justify-content: center;
子元素放大：flex-grow: 1;
margin:auto
#### 父级上使用：
1. 指定flex布局
display: flex;
父级为行内元素：display: inline-flex;
2. 项目排列方向
水平左起（默认）：flex-direction: row;
水平右起：flex-direction: row-reverse;
垂直上起：flex-direction: column;
垂直下起：flex-direction: column-reverse;
3. 如何换行
不换行（默认）：flex-wrap: nowrap;
换行，第一行在上：flex-wrap: wrap;
换行，第一行在下：flex-wrap: wrap-reverse;
flex-flow：flex-direction属性和flex-wrap属性的简写形式
4. 对齐方式
左对齐（默认）：justify-content: flex-start;
右对齐：justify-content: flex-end;
居中：justify-content: center;
两端对齐：justify-content: space-between;
项目两侧间隔相等：justify-content: space-around;
5. 垂直对齐方式
起点对齐：align-items: flex-start;
终点对齐：align-items: flex-end;
中点对齐：align-items: center;
项目的第一行文字的基线对齐：align-items: baseline;
如果项目未设置高度或设为auto，将占满整个容器的高度（默认）：align-items: stretch;
6. 多根轴线的对齐方式
与交叉轴的起点对齐：align-content: flex-start;
与交叉轴的终点对齐：align-content: flex-end;
与交叉轴的中点对齐：align-content: center;
与交叉轴两端对齐，轴线之间的间隔平均分布：align-content: space-between;
每根轴线两侧的间隔都相等：align-content: space-around;
轴线占满整个交叉轴（默认值）：align-content: stretch;
#### 子元素使用的属性：
1. 排列顺序
数字越小越靠前：order: <integer>;
2. 放大比例，相等平分剩余空间，为0不放大，不等按大小比例分
默认为0：flex-grow: <number>;
3. 缩小比例，为0不缩小，其余按比例缩小
默认为1：flex-shrink: <number>;
4. 大小（占据空间）
默认auto（项目本来大小）：flex-basis: <length> | auto;
5. flex属性，flex-grow, flex-shrink 和 flex-basis的简写
默认不放大会缩小（0 1 auto）：flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
会放大会缩小自适应(1 1 auto)：flex: auto;
不放大不缩小自适应(0 0 auto)：flex: none;
6. 对齐方式，与父级align-items属性一样
继承父级（默认）：align-self: auto；