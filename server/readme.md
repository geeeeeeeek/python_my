### 运行说明

修改settings.py中的Debug





### 跨域配置

django-cors-headers

### 多对多技术参考

https://www.cnblogs.com/SunshineKimi/p/14140900.html

### 二级分类设计
https://blog.csdn.net/weixin_47971206/article/details/124199978

### 常见问题

多对多的查询可通过related_name别名查询
join查询
ForeignKey的时候字段会自动加_id后缀
学习SerializerMethodField
跨域配置 django-cors-headers
数据库备份命令:
mysqldump -u root -p --databases 数据库名称 > xxx.sql
数据库还原命令:
source D:/xxx/xxx/shop.sql;
创建管理员命令：
insert into b_user(username,password,role,status) values('admin111',md5('admin111'),1,'0');

接口请求频次限制


### 登录接口

调login -> 生成token

### 注意

update接口的时候，如果model里面存在多对多字段，则需要设置explode






