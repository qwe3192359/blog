git config user.name     查看用户名
git config user.password
git config user.email     查看邮箱地址
git config --global user.name "username"     修改用户名
git config --global user.email "email"     修改邮箱地址
git config --global user.password    修改密码

git clone git@github.com:michaelliao/gitskills.git     从远程克隆到本地
git init     把当前目录变为Git可以管理的仓库

git add xxx     把文件添加到仓库，可以添加多个，xxx是文件的名称
git commit -m "xxx"     把文件提交到仓库，一次提交上面所添加的，xxx是本次提交的描述

git status     显示当前仓库的状态
git diff xxx     查看文件做出的改变，xxx为文件名称，可以不加
git log     显示从最近到最远的提交日志

git remote add origin git@github.com:michaelliao/learngit.git     关联github
git push -u origin master     首次提交将本地仓库推送到github
git push origin master     将本地master分支推送到github


git branch	查看本地分支
git branch -a 查看所有分支
git branch -r 查看远程仓库分支

git checkout

git push <远程主机名> <本地分支名>  <远程分支名>
git pull origin dev
git pull origin dev
git push origin dev

git merge yyf

git push origin master
如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建
git push origin ：refs/for/master
如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin –delete master
git push origin
如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支
git push
如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名

git push origin dev origin/dq

