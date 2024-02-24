list    //简称ls
install     //简称i
npm start     //npm start命令会让npm执行定义在package.json文件中的start对应命令
命令
--save  -S  //自动把模块和版本号添加到dependencies部分,生产环境也需要简写
--save  -dev-D  //自动把模块和版本号添加到devdependencies部分，只在开发环境简写
--global    -g  //全局安装简写
npm initnpm init -y//根据node_modules生成package.json文件，初始化一个package
npm update <Module Name>更新模块
npm uninstall <Module Name>un//卸载node.js模块
npm search <Module Name> 搜索模块
npm run查看当前项目的所有npm脚本命令
npm run xxx执行scripts下的命令
npm list -g npm ls//全局安装的模块列表
npm list <Module Name>//某个模块的版本号
npm config set registry https://registry.npm.taobao.org  配置淘宝源
npm config ls 查看当前源

yarn lint --fix
格式化回车

npx：先检查当前项目node_modules/下，是否存在。不存在的话，就检查全局是否已经安装对应的模块。如果还没有的话，就去仓库里面去下载对应的模块，下载完毕就执行。执行完毕就删除，不留下一丝痕迹！
