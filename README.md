
### 《css世界》笔记
#### width的
* 块级元素默认是铺满，并不是100%
* 内联元素具有包裹性，需要内部内容撑开

### 盒模型
* content box：默认width作用在这
* padding box
* border box
* box-sizing（ie8需要加前缀）：改变width的作用细节
### height
* 定位元素的百分比计算基于padding box计算的（不是border box）
* 非定位元素的百分比计算基于content box计算的
*
### max-，min
* 避免图片在移动端展示过大
```
max-width: 100%;
 height: auto!important; 
```
* 超越最大
```
.container {
 min-width: 1400px;
 max-width: 1200px;
 } 

```
* max-height代替height变化

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