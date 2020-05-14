/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 14:32:28
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 11:57:16
 */

import {Router} from 'express'; // call express
const router = Router();

/**
 * @swagger
 * servers:
 * - url: https://localhost:8081/FreeTravel
 * - url: https://localhost:8081/FreeTravel
 */

/**
 * @swagger
 * definition:
 *  noticeAddParams:
 *      description: 通知添加参数
 *      properties:
 *          username:
 *              type: string
 *          password:
 *              type: string
 */
// 定义接口
/**
 * @swagger
 * /login/admLogin:
 *   post:
 *     tags:
 *       - 超级管理员登录接口
 *     description: 使用用户名和密码登录
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: false
 *       - name: body
 *         in: body
 *         schema:
 *          $ref: '#/definitions/noticeAddParams'
 *     responses:
 *       200:
 *         description: 发布成功
 *       402:
 *          description: 信息填写不全
 *       403:
 *          description: 参数类型错误
 *
 */
router.post('/admLogin',function(req,res,next){
    
})

export default router