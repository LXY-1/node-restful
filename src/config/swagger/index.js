/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 12:34:39
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-13 13:12:59
 */
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerConfig from './config.js';

console.log(swaggerConfig.options.apis)

export default function setSwagger(app) {
   

    const swaggerSpec = swaggerJSDoc(swaggerConfig.options)

    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    app.use(swaggerConfig.routerPath, swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}