/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 10:22:55
 */
import express from 'express';
import adminUsers from './adminUsers';
import loginRouter from './login';
import permisionRouter from './permision';
import roleRouter from './role';
import uploadRouter from './upload'
import UserRouter from './user'
import StrategyRouter from './strategy'
import tagRouter from './tag.js'
import messageRouter from './message.js'
import articleRouter from './article.js'
import videoRouter from './video.js'

const port = process.env.PORT || 8081 // set our port
const ProjectName = process.env.pnaem || 'FreeTravel'


const router = express.Router();


router.get('/', function (req, res, next) {
   res.send(`<a href='http://${req.hostname}:${port}/swagger-ui/index.html'>项目在线接口文档</a>`)
});
router.use('/login',loginRouter)
router.use('/adminUsers', adminUsers);
router.use('/permision',permisionRouter)
router.use('/role',roleRouter)
router.use('/upload',uploadRouter)
router.use('/user',UserRouter)
router.use('/strategy',StrategyRouter)
router.use('/tag',tagRouter)
router.use('/message',messageRouter)
router.use('/article',articleRouter)
router.use('/video',videoRouter)
module.exports = router;
