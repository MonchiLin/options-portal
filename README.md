# Readme

- 安装 Node v17
- 安装 Yarn
  - npm install -g yarn
- 安装 pm2
  - npm install -g pm2
- 安装依赖
  - yarn
- 打包
  - yarn build
- 部署-启动服务
  - pm2 start ecosystem.config.js
- 部署-关闭服务
  - pm2 stop ecosystem.config.js
