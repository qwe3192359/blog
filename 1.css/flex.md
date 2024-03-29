#### 常用
两端对齐：justify-content: space-between;
水平居中：justify-content: center;
垂直居中：align-items: center;
垂直排列：flex-direction: column;

不会放大和缩小：flex: none;
子元素平分剩余空间：flex-grow: 1;
子元素不缩小：flex-shrink: 0;
###
flex-direction,writing-mode(元素中文本方向),direction(设置文本、表格列和水平溢出的方向)会影响flex布局的内容排列方式
### 父级上使用：
#### 指定flex布局
* display: flex;
* display: inline-flex;父级为行内元素：
#### 项目排列方向
* 水平左起（默认）：flex-direction: row;
* 水平右起：flex-direction: row-reverse;
* 垂直上起：flex-direction: column;
* 垂直下起：flex-direction: column-reverse;
#### 如何换行
* 不换行（默认）：flex-wrap: nowrap;
* 换行，第一行在上：flex-wrap: wrap;
* 换行，第一行在下：flex-wrap: wrap-reverse;
#### flex-flow：flex-direction属性和flex-wrap属性的简写形式
#### gap,row-gap,column-gap
* 第一个值行的间距，第二个值列的间距
#### 对齐方式
* 左对齐（默认）：justify-content: flex-start;
* 右对齐：justify-content: flex-end;
* 居中：justify-content: center;
* 两端对齐：justify-content: space-between;
* 项目两侧间隔相等（行首行末减倍）：justify-content: space-around;
* 项目两侧间隔相等（行首行末也一致）：justify-content: space-evenly;
#### 垂直对齐方式
* 如果项目未设置高度或设为auto，将占满整个容器的高度（默认）：align-items: stretch;
* 起点对齐：align-items: flex-start;
* 终点对齐：align-items: flex-end;
* 中点对齐：align-items: center;
* 项目的第一行文字的基线对齐：align-items: baseline;
#### 多根轴线的对齐方式
* 与交叉轴的起点对齐：align-content: flex-start;
* 与交叉轴的终点对齐：align-content: flex-end;
* 与交叉轴的中点对齐：align-content: center;
* 与交叉轴两端对齐，轴线之间的间隔平均分布：align-content: space-between;
* 每根轴线两侧的间隔都相等：align-content: space-around;
* 轴线占满整个交叉轴（默认值）：align-content: stretch;

### 子元素使用的属性
#### 排列顺序
* 数字越小越靠前：order: <integer>;
#### 放大比例，相等平分剩余空间，为0不放大，不等按大小比例分
* 默认为0：flex-grow: <number>;
#### 缩小比例，为0不缩小，其余按比例缩小
* 默认为1：flex-shrink: <number>;
#### 大小（占据空间）
* 默认auto（项目本来大小）：flex-basis: <length> | auto;
#### flex属性，flex-grow, flex-shrink 和 flex-basis的简写
* flex: 0 1 auto; ：默认不放大会缩小，默认值
* flex: 1 1 0%;/flex: 1; ：会放大和缩小，忽略其初始尺寸，有多余空间时子元素的宽度都一样，缩小时会考虑子元素的最小宽度，配合`min-width:0;`可实现等比缩放
* flex: 1 1 auto;/flex: auto; ：考虑其初始大小的情况下放大和缩小
* flex: 0 0 none;/flex: none; ：不会放大和缩小
#### 对齐方式，与父级align-items属性一样
* 继承父级（默认）：align-self: auto；