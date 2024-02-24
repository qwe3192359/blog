### 问题：登陆失效导致嵌套的iframe页面重定向到登录页面，页面显示不正常
#### 1.判断页面是否在iframe里
```
1.方式一

if (self.frameElement && self.frameElement.tagName == "IFRAME") {
　　alert('在iframe中');
}

2.方式二
if (window.frames.length != parent.frames.length) {
　　alert('在iframe中');
}

3.方式三
if (self != top) { 
　　alert('在iframe中');
}
```
#### 2.如果页面在iframe从最顶级窗口重定向到其他页面
```
if (self != top) { 
    window.top.location = ''
}
```