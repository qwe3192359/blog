#### :nth-child(n)的用法
#####正方向范围
```
li:nth-child(n+6)
选中从第6个开始的子元素
```

#####负方向范围
```
:nth-child(-n+9)
选中从第1个到第9个子元素
```

#####前后限制范围
```
:nth-child(n+4):nth-child(-n+8)
选中第4-8个子元素

```

#####奇数、偶数位
```
:nth-child(odd)
:nth-child(even)
```

#####隔选择子元素
```
:nth-child(3n+1),
选择1,4,7,10
```

#####范围高级用法
```
nth-child(n+2):nth-child(odd):nth-child(-n+9)
选中的子元素是从第2位到第9位，并且只包含奇数位
```