2.变量

使用$符号来标识变量

$nav-color: #F90; nav { color: $nav-color; }

2.规则嵌套，伪类使用&

#content { article { h1 { color: #333 } p { margin-bottom: 1.4em } } aside { background-color: #EEE } } /* 编译后 */ #content article h1 { color: #333 } #content article p { margin-bottom: 1.4em } #content aside { background-color: #EEE }

3.嵌套属性

nav { border: { style: solid; width: 1px; color: #ccc; } } /* 编译后 */ nav { border-style: solid; border-width: 1px; border-color: #ccc; } nav { border: 1px solid #ccc { left: 0px; right: 0px; } } /* 编译后 */ nav { border: 1px solid #ccc; border-left: 0px; border-right: 0px; }

4.静默注释

// 这种注释内容不会出现在生成的css文件中

5.混合器

混合器使用@mixin标识符定义，通过@include来使用这个混合器

@mixin rounded-corners { -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; } notice { background-color: green; border: 2px solid #00aa00; @include rounded-corners; } //sass最终生成： .notice { background-color: green; border: 2px solid #00aa00; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; }