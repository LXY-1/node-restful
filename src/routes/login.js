/*
 * @Description: 系统的所有登录控制器，包括管理员登录、客户端用户登录（普通登录、微信登录、手机短信验证码的登录）
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 14:32:28
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-02 16:59:41
 */

import {Router} from 'express'; // call express
import LoginService from '../services/LoginService';
import consoleLog from '../utils/consoleLog';
const router = Router();
const loginService = new LoginService()




router.post('/adminerLogin',function(req,res,next){
    consoleLog(`请求数据${JSON.stringify(req.body)}`, 'blue')
    consoleLog(`${req.body.phone}+${req.body.passowrd}`, 'blue')
    loginService.adminerLogin(req).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    });
})

router.post('/userLogin',function(req,res,next){
    consoleLog(`请求数据${JSON.stringify(req.body)}`, 'blue')
    consoleLog(`${req.body.phone}+${req.body.passowrd}`, 'blue')
    loginService.userLogin(req).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    });
})



export default router