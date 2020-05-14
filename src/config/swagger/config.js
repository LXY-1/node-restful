/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 12:37:53
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-13 13:18:45
 */


import path from 'path';
import { deflate } from 'zlib';

const options = {
    definition: {
        // swagger 采用的 openapi 版本 不用改
        openapi: '3.0.0',
        // swagger 页面基本信息 自由发挥
        info: {
            title: '随心游--resfule web api接口文档',
            version: '1.0.0',
        },
        // host: `${host}:${port}`,
        // basePath: "/FreeTravel"
    },
    // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
    apis: [path.join(__dirname, '../../routes/*.js')],
    
}
const swaggerConfig  = {
    options:options,
    routerPath: '/api-docs' //  swaggerSpec 生成 swagger 文档页面，并开放在指定路由，也就是访问/api-docs
}

export default swaggerConfig
