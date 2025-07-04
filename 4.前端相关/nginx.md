关闭所有 nginx 进程
task kill /f /im nginx.exe
查看所有 nginx 进程
tasklist /fi "imagename eq nginx.exe"

client_max_body_size 500m;  
设置上传文件大小

linux 如何重启 nginx
1、进入 nginx 安装目录下的 sbin 目录下
2、执行以下命令：

./nginx -s reload
