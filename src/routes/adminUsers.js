/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 14:31:14
 */
import { Router } from 'express'; // call express
import AdminService from '../services/AdminSerives';
import consoleLog from '../utils/consoleLog';
const router = Router();
const adminService = new AdminService()


router.post('/add', (req, res, next) => {
  console.log(0)
  adminService.add(req.body).then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    consoleLog(JSON.stringify(err),'red')
    res.status(500).json(err)
  })
});

router.put('/update', (req, res, next) => {
  res.json({
    code: 0,
    msg: 'OK',
    data: { result: true }
  })
})
export default router;
