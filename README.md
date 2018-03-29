
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