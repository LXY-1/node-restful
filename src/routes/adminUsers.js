/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 11:54:17
 */
import { Router } from 'express'; // call express
import AdminService from '../services/AdminSerives';
const router = Router();
const adminService = new AdminService()



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
 * /adminUsers/add:
 *   post:
 *     tags:
 *       - 添加超级管理员
 *     description: 添加超级管理员
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
router.post('/add', (req, res, next) => {
  console.log(0)
   adminService.add(req.body).then((result)=>{
      res.status(200).json(result)
   }).catch(err=>{
     res.status(500).json(err)
   })
});
/**
 * @swagger
 * /adminUsers/update:
 *   put:
 *     tags:
 *       - 更新超级管理员
 *     description: 更新超级管理员
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
router.put('/update', (req, res, next) => {
  res.json({
    code: 0,
    msg: 'OK',
    data: { result: true }
  })
})
export default router;
