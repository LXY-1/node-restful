/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:20:47
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-06 12:32:18
 */
// express app 入口文件同app.js

// 开发环境下引入模块
import consoleLog from './utils/consoleLog';
import responResult from './utils/responResult';

// 导入socket服务
import './socketService/index.js'


// 导入 babel的一个扩展包，用于支持babel-cor不支持的一些比较新的es6特性，也就是es6/7/8这些新特新以及全局api
import '@babel/polyfill'




//引入数据库连接模块
const db = require('./db/index.js')

import express from 'express'; // call express

// 导入封装项目业务路由的路由管理器——对应java的控制器层
import businessRoutes from './routes/';

//引入express-session用于在express中操作session
let session = require('express-session');
//引入connect-mongo用于session持久化
const MongoStore = require('connect-mongo')(session);

// 接入自动S生成在线接口文档的swggerui插件配置文件——封装的配置文件——不需要了
// import setSwagger from "./config/swagger";

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

//定义一个cookie和session组合使用的配置对象
app.use(session({
    name: 'mycname',   //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否在存储内容之前创建会话
    resave: true,//是否在每次请求时，强制重新保存session，即使他们没有变化
    store: new MongoStore({
        url: 'mongodb://localhost:27017/cookies_container',
        touchAfter: 1800//修改频率（例：//在24小时之内只更新一次）
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作cookie
        maxAge: 24 * 360000 // 设置cookie的过期时间1天
    },
}));

//数据库连接成功后，注册路由
db.then(() => {

    consoleLog('连接数据库成功', 'white')



    // 使用swagger ui,这里是将ui页面的静态资源从本地导入，使用express.statci解析静态资源
    // 根据在线编辑swagger，编辑自己需要的接口，导入json文件，修改本地的swagger ui
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/swagger-ui', express.static(path.join(__dirname, './public/swagger-ui')))

    // 现在express模块内置了 解析post请求体参数格式的的中间件了
    app.use(express.json({limit: '50mb'}))
    app.use(express.urlencoded({ limit: '50mb', extended: false }))

    // 全局中间件进行拦截
    // 方式一使用 app.use，这样十一的话默认不管进入哪一个路由，都会先进入这个中间件进行过滤，适合一些不论进入什么路由都需要进行
    // 某些过滤的操作，当然你可以可以同req对象判断是不是需要特定过滤的路由，再进行过滤拦截操作，其他路由直接放行
    app.use(function (req, res, next) {

        // 调试
        consoleLog(`接口${req.path}请求进来了,body是${JSON.stringify(req.body)}，host是${req.get('host')}`, 'blue')

        // 防盗连接实现:通过轻轻的host判断是不是自己的运行的主机名，如果不是拦截或者
        if (req.get('host') !== `${host}:${port}` && req.get('host').indexOf('192.168.31.8') === -1 && req.get('host').indexOf('192.168.43.98') === -1) {
            // 记住头字段的host可以获取到请求者的主机和端口
            res.send('禁止非法请求当前站站点资源')
            return
        }
        // 登录权限判断 -- 排除登录接口后，判断对应的session是否存在
        if (req.path.indexOf('login') !== -1 || req.path.indexOf('strategy') !== -1 || req.path.indexOf('user') !== -1 || req.path === '/FreeTravel' || req.path.indexOf('upload') !== -1 || req.path.indexOf('article') !== -1) {
            next()
        } else {
            const { _id } = req.session
            if (_id) {
                // 登录状态还在，接口放行
                next()
            } else {
                // 登录已经过期
                let result = responResult['UNLOGIN']
                res.status(200).json(result)
            }
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