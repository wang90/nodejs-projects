# 一个简单的web server应用

## 基本构成
- 路由处理
- 静态资源托管
- 可以处理 http 的动词
- 可以是持久化数据

## 使用方式
### 安装
````````
brew install node // 安装node
brew install nodemon // 安装nodemon,根据文件自检查
brew install httpie // 安装 httpie(可忽略)
````````

### 启动
```````
cd min_node
npm run dev
```````
### 访问
```````
curl http://localhost:8000/ 
// hello world

curl http://localhost:8000/home.html
// 404

curl http://localhost:8000/api
// { "code": 200, "msg": "success", "data": {}}

curl -H "Content-Type: application/json" -X POST -d '{"name": "Jack"}' "http://localhost:8000/api"
// {"name": "Jack"}
}
```````
