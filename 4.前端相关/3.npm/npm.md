#### npm
##### 简写
list         ls //
install      i  //
--save      -S  //自动把模块和版本号添加到dependencies部分,生产环境也需要简写
--save-dev  -D  //自动把模块和版本号添加到devdependencies部分，只在开发环境简写
--global    -g  //全局安装简写
#### 常用命令
npm init  
npm init -y   //根据node_modules生成package.json文件，初始化一个package
npm update <Module Name>      //更新模块
npm uninstall <Module Name>   //卸载node.js模块
npm search <Module Name>      //搜索模块
npm run                       //查看当前项目的所有npm脚本命令
npm run xxx                   //执行scripts下的命令
npm list -g npm ls            //全局安装的模块列表
npm list <Module Name>        //某个模块的版本号
npm config ls                 //查看当前源
#### 
npm config set registry https://registry.npm.taobao.org  配置淘宝源
