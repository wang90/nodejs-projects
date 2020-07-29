# express - 邮件模版系统

- 实现一个可以生成邮件的模版管理系统
- 有配置界面，可以沉淀业务域中国呢的邮件模版，可以新增模版
- 可以预览最终的邮件样式

### REST 接口设计-路由
- GET /xhr/v1/template?page=1&size=10
- GET /xhr/v1/template/1
- POST /xhr/v1/template
- PUT /xhr/v1/template/1
- DELETE /xhr/v1/template/1

### 数据库设计 
- id String 唯一标示
- template text可以支持HTML
- data邮件填充数据

### 项目前准备
#### 创建项目
```````
npm init
```````
#### 添加相关工具 
```````
npm install --dev express nodemon body-parser mongoose
```````

## 前端项目
``````
cd views
npm install
``````