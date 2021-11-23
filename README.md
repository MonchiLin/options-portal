# Readme

- 使用 nvm
  - 安装
    - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    - 下一步是添加 nvm 到环境变量，可以将其写在 .bashrc
    - export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    - nvm install 17
    - nvm use 17
    - npm install -g yarn
    - npm install -g pm2

- 安装依赖(先执行 nvm use, 自动将环境变量设置为 node 17)
  - yarn
- 运行项目
  - yarn dev
- 打包
  - yarn build

- 部署-启动服务 - 端口由配置文件指定
  - pm2 start ecosystem.config.js
- 部署-关闭服务
  - pm2 stop ecosystem.config.js
- 部署-重启服务
  - pm2 restart ecosystem.config.js
- 部署-删除服务
  - pm2 delete ecosystem.config.js
