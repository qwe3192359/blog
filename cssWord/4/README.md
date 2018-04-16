### 《css世界》笔记第四章

### content
#### 替换元素
* img,video,iframe,表单元素等
* 内容的外观不受页面上的 CSS 的影响
* 有自己的尺寸。
* 在很多 CSS 属性上有自己的一套表现规则
* Firefox中img没有src属性表现不一致，img { display: inline-block; } 
* css3替换元素object-fit属性
* 替换元素不加src与span类似
* 基于伪元素的图片内容生成技术，没有src属性img支持伪元素，增加src属性后，就不支持伪元素了
[demo地址](4-1.html)




### padding
* 因为 CSS 中默认的 box-sizing 是 content-box，所以使用padding会增加元素尺寸
* 设置了 box-sizing:border-box，padding 值足够大，width 也无能为力了
* 行内元素padding尺寸虽有效，但是对上下元素的原本布局却没有任何影响，仅仅是垂直方
             向发生了层叠，会影响滚动条
* 百分比值基于父级宽度计算
* 滚动容器底部留白使用 padding 会被ie和Firefox忽略
         
### margin
* 元素的尺寸表现符合“充分利用可用空间”，才可以通过 margin 改变尺寸。
* margin合并
* margin负值的利用
* margin:auto的利用，右对齐、居中（水平方向），
* 配合定位做水平垂直居中

### border
#### border-width支持的关键字
* thin：薄薄的，等同于 1px。
* medium（默认值）：薄厚均匀，等同于 3px。
* thick：厚厚的，等同于 4px。
#### border-style
* none：默认值
* solid：实线
* dashed：虚线
* dotted：虚点边框（ie8做圆点）
* double：两根实线
* 其他：inset（内凹）、outset（外凸）、groove（沟槽）、ridge（山脊）
#### border-color
* color：默认值是字体的颜色
* transparent：透明
    * 右下方 background 定位的技巧   
    * 增加点击区域大小
    * 三角等图形绘制
       

                 
                