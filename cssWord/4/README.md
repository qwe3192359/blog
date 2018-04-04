### 《css世界》笔记第四章

### content
#### 替换元素
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
             向发生了层叠
* 百分比值基于父级宽度             
       
### 替换元素
基于伪元素的图片内容生成技术。初始图片 src 没有，因此，::before 和::after 可以
                 生效，我们就可以把 alt 属性值通过 content 属性呈现出来
                 点击按钮给图片添
                 加一个 src 地址时，图片从普通元素变成替换元素，原本都还
                 支持的::before 和::after 此时全部无效，此时再 hover 图
                 片，是不会有任何信息出现的
                 
                 
```
img::after {
 /* 生成 alt 信息 */
 content: attr(alt);
 /* 尺寸和定位 */
 position: absolute; bottom: 0;
 width: 100%;
 background-color: rgba(0,0,0,.5);
 transform: translateY(100%);
 /* 来点过渡动画效果 */
 transition: transform .2s;
}
img:hover::after {
 /* alt 信息显示 */
 transform: translateY(0);
} 
```

content: url(laugh-tear.png); 替换图片
:empty 选择器，没有内容的元素