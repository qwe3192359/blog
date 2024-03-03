#### width的默认值是width: auto;
* 充分利用可用空间fill-available：div、p等默认宽度为父级的100%，margin/border/padding
和 content 内容区域自动分配水平空间
* 收缩与包裹fit-content：浮动、绝对定位、inline-block 元素或 table 元素，元素尺寸由内部元素决定，但永远小于“包含块”容器的
尺寸
* 收缩到最小min-content：文字最小换行的宽度
* 超出容器限制max-content：子元素既保持了 inline-block 元素的收缩特性，又同时让内容宽度最大，直接无视父
级容器的宽度限制

