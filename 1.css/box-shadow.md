#### 阴影,支持逗号分隔语法，可以创建任意数量的投影
语法：box-shadow: h-shadow v-shadow blur spread color inset;
* h-shadow     必需。水平阴影的位置。允许负值。
* v-shadow     必需。垂直阴影的位置。允许负值。
* blur              可选。模糊距离。
* spread          可选。阴影的尺寸。
* color             可选。阴影的颜色。请参阅 CSS 颜色值。
* inset             可选。将外部阴影 (outset) 改为内部阴影。

#### 轮廓
语法：outline:#00FF00 dotted thick;
outline-color     轮廓的颜色
outline-style     轮廓的样式
outline-width     轮廓的大小
outline-offset:15px;     轮廓与元素的距离，不能简写

#### border:
为所有四个角提供完全不同的水平和垂 直半径，方法是在斜杠前指定 1~4 个值，在斜杠后指定另外 1~4 个值。请注 意这两组值是单独展开为四个值的

#### 透明
opacity: 0.3;     /*除了IE，但是IE9支持*/
filter:alpha(opacity=30);     /*IE都支持，IE6不支持，可以使用Alpha透明图片作为背景*/
background: #58a linear-gradient(#77a0bb, #58a);
box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink, 0 2px 5px 15px rgba(0,0,0,.6)

