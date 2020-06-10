/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-19 14:21:22
 */
import { Router } from 'express'; // call express
import AdminService from '../services/AdminSerives';
import consoleLog from '../utils/consoleLog';
const router = Router();
const adminService = new AdminService()


router.post('/add', (req, res, next) => {
  consoleLog(`请求数据${JSON.stringify(req.body)}`, 'blue')
  adminService.add(req.body).then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    consoleLog(JSON.stringify(err),'red')
    res.status(500).json(err)
  })
});

// 根据id查询，使用动态路由，实现restful风格
router.get('/:id', (req, res, next) => {
  consoleLog(`动态路由请求数据${JSON.stringify(req.params.id)}`, 'blue')
  adminService.findById(req.params.id).then((result) => {
      res.status(200).json(result)
  }).catch((err) => {
      consoleLog(JSON.stringify(err), 'red')
      res.status(500).json(err)
  })
})

// 分页 + 无条件查找所有记录
/**
 * @name: 
 * @description: 
 * @msg: 
 * @param {type} req:{pageNum,pageSize}
 * @return: 
 */
router.patch('/findAll', (req, res, next) => {
  consoleLog(`路由请求query数据${JSON.stringify(req.query)}`, 'blue')
  let { pageNum, pageSize } = req.query
  adminService.findAll(pageNum, pageSize).then((result) => {
      res.status(200).json(result)
  }).catch((err) => {
      consoleLog(JSON.stringify(err), 'red')
      res.status(500).json(err)
  })

})

// 分页 + 多条件查找所有记录
/**
 * @name: 
 * @description: 
 * @msg: 
 * @param {type} req:{pageNum,pageSize}
 * @return: 
 */
router.patch('/findValug', (req, res, next) => {
  consoleLog(`路由请求query数据${JSON.stringify(req.query)}`, 'blue')
  let {username, introduce,enable_flag, roleid,adminerid, pageNum, pageSize } = req.query
  adminService.fiindValug(username,introduce,enable_flag,roleid,adminerid,pageNum, pageSize).then((result) => {
      res.status(200).json(result)
  }).catch((err) => {
      consoleLog(JSON.stringify(err), 'red')
      res.status(500).json(err)
  })

})



// 删除部分

// 根据id进行删除
router.delete('/:id', (req, res, next) => {
  consoleLog(`动态路由请求数据${JSON.stringify(req.params.id)}`, 'blue')
  adminService.deletById(req.params.id).then((result) => {
      res.status(200).json(result)
  }).catch((err) => {
      consoleLog(JSON.stringify(err), 'red')
      res.status(500).json(err)
  })
})


//更新部分

// 根据id进行更新,动态路由 + 更新的body
router.put('/:id', (req, res, next) => {
  consoleLog(`更新接口动态路由请求数据${JSON.stringify(req.params.id)}`, 'blue')
  consoleLog(`更新接口动态路由请求body数据${JSON.stringify(req.body)}`, 'blue')
  adminService.updatById(req.params.id, req.body).then((result) => {
      res.status(200).json(result)
  }).catch((err) => {
      consoleLog(JSON.stringify(err), 'red')
      res.status(500).json(err)
  })
})

export default router;
