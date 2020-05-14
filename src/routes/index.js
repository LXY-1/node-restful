/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 13:52:10
 */
import express from 'express';
import adminUsers from './adminUsers';
import loginRouter from './login';

const port = process.env.PORT || 8081 // set our port
const ProjectName = process.env.pnaem || 'FreeTravel'


const router = express.Router();


router.get('/', function (req, res, next) {
   res.send(`<a href='http://${req.hostname}:${port}/swagger-ui/index.html'>项目在线接口文档</a>`)
});
router.use('/login',loginRouter)
router.use('/adminUsers', adminUsers);
module.exports = router;
