背景的各个属性：
#### background-color     背景颜色
#### background-image     背景图片，加逗号可以实现多背景
#### background-position     背景定位
     top left，top center，top right，center left， center center，center right，bottom left，bottom center，bottom right，%，或者任意css单位，默认值：0% 0%。
     如果您仅规定了一个关键词，那么第二个值将是"center"。如果您仅规定了一个值，另一个值将是50%。
#### background-attachment     背景图像是否固定

#### background-repeat     如何重复背景图像

#### background-size     背景图片的尺寸

#### background-origin     处理背景定位的原点坐标位置

#### background-clip     背景修剪的位置
* border-box     背景被裁剪到边框盒。(默认值)
* padding-box     背景被裁剪到内边距框。
* content-box     背景被裁剪到内容框。


#### background 简写
background : background-color background-image background-repeat background-attachment background-position transparent
各项值：
transparent 表示透明无颜色
background-color：none 表示没有设置背景图片 ，url(图片url)，#FFFFFF(十六进制颜色代码)
background-repeat：repeat 图片X轴、Y轴重复，repeat-x X轴重复，repeat-y Y轴重复
background-attachment：scroll 表示背景图片随浏览器下拉而滚动， fixed当 页面的其余部分滚动时，背景图像不会移动（即背景固定）。
background-position：left/right 水平居左/右，center 垂直居中位置，也可接受整数参数。

背景渐变
background: linear-gradient(direction, color-stop1, color-stop2, ...);
线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
径向渐变（Radial Gradients）- 由它们的中心定义
to right从左到右渐变
to bottom right左上角开始（到右下角）的线性渐变
180deg 角度渐变
rgba(255,0,0,0) 颜色使用rgba可实现透明度
repeating-linear-gradient重复的线性渐变，颜色后面加百分比
径向渐变
shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。