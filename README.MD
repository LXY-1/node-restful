<!--
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:06:40
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 12:14:21
 -->
##### 使用express框架搭建的纯web api接口，接口风格是resful api风格
##### 特点
1. 架构设计，实现resfule api接口设计、项目分层结构设计，解耦业务逻辑代码，提高代码的可维护性
2. 一套接口可用于多端客户端，pc端管理系统、移动端app，安卓、ios
3. 基于nodejs的npm插件系统配置一套脚手架基础设施，实现自动化工程开发，包括
4. 从0搭建mvc框架模式，从数据库配置、路由配置、业务逻辑流程组织
```
1. node开发过程中自动重启服务器，无需每次都要运行node index.js启动服务器（nodemon)
2. 使用ES6，ES7 编写代码，自动编译 使用import，export新特性。(babel)
3. 项目环境变量配置，这里环境变量是为了自动区分开发环境和生产环境
4. 自动化单元测试
5. 自动部署到远程服务器
```
4. 基于express框架的特点
   - 中间件，拦截实现(登录权限、接口权限、以及其他安全性拦截比如资源的防盗链接的实现，也是基于中间件来实现的，配置一个中间件回调函数，通过req.get获取hot进行判断。一般是用于资源比如图片、视频链接的防盗处理，比如这里有一张用户上传的图片。。。。。)，其他功能插件实现比如解析post请求、解析cookie字段，session
   - 路由
5. 基于mongoose特点
   - mongoose连接数据库配置
   - mongoose创建model，实现数据库增删改查


##### 基础设施问题
-  babel解析es6
> 问题一，在babel import模块中存在async特性，babel-core无法解析需要安装一个扩展包babel-profill[link](https://www.babeljs.cn/docs/babel-polyfill)
> [参考](https://www.cnblogs.com/Jeely/p/11231530.html)
```
1.打开命令行键入 npm install --save-dev babel-polyfill 安装polyfill

2.在webpack.config.js中最上面写上var babelpolyfill = require("babel-polyfill");

3.在自己的项目js文件中最开头写上import "babel-polyfill";

然后在.babelrc文件中配置preset-envc插件中的参数"useBuiltIns":"usage"，让babel按需引入需要的补充模块：
{
    "presets":[
        ["@babel/preset-env",{
            "useBuiltIns":"usage"
        }],
        "@babel/preset-react"
    ]
}
```
- 控制条调试问题
1. 打印问题
> 封装一个全局的consoleLog，打印彩色字体。
   - 方案一、自己封装，这里是我自己封装了一个[link](https://blog.csdn.net/autumn84/article/details/44816947?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase)
   - 方案二、使用第三方插件 [link](https://blog.csdn.net/hhs57/article/details/80077568?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.nonecase)


##### 项目运行分析
###### 入口文件
`app.js`
```
入口文件，导入express框架，使用第三方的中间件，实现一些通用操作（post请求，表单文件、session、cookie操作，安全性验证），以及自定义拦截器中间件实现对路由的全局拦截，启动路由模块，导入调用封装的业务路由的控制器，处理具体的路由业务逻辑，比如一个登录。。。
其他业务逻辑相关的文件夹
路由控制器，对应每一个路由请求应该进入到的方法
servicie业务逻辑层，根据控制层的路由请求信息，调用具体的业务层方法
数据库操作层
model层
```
优化，对于app.js使用的中间件，很多需要很多配置代码，如果都写在一个js文件里面会过于庞大，所以可以建立相关的目录封装后再在app.js里面引入

##### 静态资源托管
[link](https://www.expressjs.com.cn/starter/static-files.html)

##### 项目开发相关参考文章、网站
[express集成swagger](https://www.jianshu.com/p/e7c7e7b1d858)
[swagger注释编辑器](http://editor.swagger.io/#)
[nodejs 使用swagger ui的正确方式](https://www.jianshu.com/p/2b1db8bff5a1)
[respon返回数据格式和返回方式](https://blog.csdn.net/qq_41761591/article/details/86467827?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase)
[使用中间件和获取请求的host实现防盗连接]()

##### 一些收获
1. 模块化方法注释功能
下面的jsdoc注释模式，可以使得你的模块api在对应导入的对方使用api的时候进行提升
```js
 /**
   * 使用 Model save() 往数据库管理员集合添加一个document。
   *
   * @param obj 构造实体的对象
   * @returns {Promise}
   */
```

2. 错误处理相关
> 几个涉及到io操作、网络请求的地方
  - 数据库连接
  - 使用mongosse model操作数据库
  - 网球请求，路由拦截，对应路由回调函数
> 异步实现，事件，回调
> 错误处理的话，进行捕获，暴露错误
