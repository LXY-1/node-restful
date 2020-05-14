/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:20:47
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 11:32:51
 */
// express app 入口文件同app.js

// 开发环境下引入模块
import consoleLog from './utils/consoleLog';


// 导入 babel的一个扩展包，用于支持babel-cor不支持的一些比较新的es6特性，也就是es6/7/8这些新特新以及全局api
import '@babel/polyfill'




//引入数据库连接模块
const db = require('./db/index.js')

import express from 'express'; // call express

// 导入封装项目业务路由的路由管理器——对应java的控制器层
import businessRoutes from './routes/';

// 接入自动S生成在线接口文档的swggerui插件配置文件——封装的配置文件
import setSwagger from "./config/swagger";

import path from 'path'



// 环境变量自动控制项目环境相关
const port = process.env.PORT || 8081 // set our port
const host = process.env.HOST || 'localhost'
const ProjectName = process.env.pnaem || 'FreeTravel'

const app = express()



// const router = express.Router(); // get an instance of the express Router



// 相关全局中间件配置

// 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
// 启动swagger插件，二次封装的，避免app.js过于庞大，其实如果是封装的


//数据库连接成功后，注册路由
db.then(() => {

    consoleLog('连接数据库成功', 'white')
    setSwagger(app)

    // 现在express模块内置了 解析post请求体参数格式的的中间件了
    app.use(express.urlencoded({ extended: true }))

    // 全局中间件进行拦截
    // 方式一使用 app.use，这样十一的话默认不管进入哪一个路由，都会先进入这个中间件进行过滤，适合一些不论进入什么路由都需要进行
    // 某些过滤的操作，当然你可以可以同req对象判断是不是需要特定过滤的路由，再进行过滤拦截操作，其他路由直接放行
    app.use(function (req, res, next) {

        // 调试
        consoleLog(`接口${req.path}请求进来了,body是${JSON.stringify(req.body)}，query是${JSON.stringify(req.query)}`, 'blue')

        // 防盗连接实现:通过轻轻的host判断是不是自己的运行的主机名，如果不是拦截或者
        if (req.get('host') !== `${host}:${port}`) {
            // 记住头字段的host可以获取到请求者的主机和端口
            res.send('禁止非法请求当前站站点资源')
            return
        }
        // 登录权限判断 -- 排除登录接口后，判断对应的session是否存在
        if (false) {

        } else {
            consoleLog('成功通过拦截器进来了', 'white')
            next()
        }

    })

    // 配置接口项目名以以及导入所欲页面功能路由
    app.use(`/${ProjectName}`, businessRoutes);

}).catch((err) => {
    consoleLog(`数据库连接失败${err}`, 'red')
})





app.listen(port, (err) => {
    if (!err) consoleLog(`服务器启动并运行与 ${host}:${port}/${ProjectName}`, 'yellow')
    else consoleLog(`端口监听失败${err}`, 'red')
})