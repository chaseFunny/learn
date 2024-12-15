# mysql 数据库
特点：
- 关系型数据库
- 是由瑞典Mysql AB 公司开发，后来被 Oracle 购买
- 开源
- 轻量
- 快速

## 安装

> 环境，macOS

homebrew
```bash
brew install  mysql@8.4
```
初始化
```bash
mysql_install_db --user=root --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
```
启动
```bash
mysql.server start
```
停止
```bash
mysql.server stop
```
查看状态
```bash
mysql.server status
```

## 可能遇到的问题

安装未成功，权限问题和数据目录已存在文件的问题
现象：
```bash
Warning: The post-install step did not complete successfully
```
解决方法:
1）清理重置数据目录
```bash
# 停止所有 MySQL 进程
brew services stop mysql@8.4

# 删除现有的数据目录
sudo rm -rf /opt/homebrew/var/mysql

# 重新创建数据目录
sudo mkdir -p /opt/homebrew/var/mysql

# 设置正确的权限（使用你的用户名）
sudo chown -R haozhang:staff /opt/homebrew/var/mysql
sudo chmod -R 755 /opt/homebrew/var/mysql
```

2）设置环境变量
```bash
echo 'export PATH="/opt/homebrew/opt/mysql@8.4/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

3）初始化 MySQL，注意这里 user 设置为自己的
```bash
# 使用 --initialize-insecure 初始化数据目录（这会创建一个没有密码的 root 用户）
mysqld --initialize-insecure --user=xxx --basedir=/opt/homebrew/opt/mysql@8.4 --datadir=/opt/homebrew/var/mysql
```
4）启动 MySQL
```bash
# 使用 brew services 启动（推荐）
brew services start mysql@8.4

# 或者直接启动
/opt/homebrew/opt/mysql@8.4/bin/mysqld_safe --datadir=/opt/homebrew/var/mysql
```

5）设置 root 密码
```bash
mysql_secure_installation
```

6）测试连接
```bash
# 如果还没有设置密码
mysql -u root

# 如果已经设置了密码
mysql -u root -p
```

通过 vscode 连接数据库
安装插件：https://open-vsx.org/extension/cweijan/vscode-mysql-client2

安装成功点击插件图标，然后点击 `Create Connection` 创建连接，然后点击 `Connect` 连接数据库
![image-20241215175909701](https://blog-1304565468.cos.ap-shanghai.myqcloud.com/work/image-20241215175909701.png)

这里输入你的账号密码