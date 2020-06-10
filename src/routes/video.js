/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 12:43:23
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 12:12:39
 */
import { Router } from 'express'; // call express
import VideoService from '../services/VideoService';
import consoleLog from '../utils/consoleLog';
const router = Router();
const videoService = new VideoService()

// 添加一条权限记录
router.post('/add', (req, res, next) => {
    consoleLog(`请求数据${JSON.stringify(req.body)}`, 'blue')
    videoService.add(req.body).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    })
});
// 添加多条权限记录
router.post('/addMore', (req, res, next) => {
    consoleLog(`请求数据${JSON.stringify(req.body)}`, 'blue')
    let list = req.body.list
    videoService.addMany(list).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    })
});

// 查询部分

// 根据id查询，使用动态路由，实现restful风格
router.get('/:id', (req, res, next) => {
    consoleLog(`动态路由请求数据${JSON.stringify(req.params.id)}`, 'blue')
    videoService.findById(req.params.id).then((result) => {
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
    videoService.findAll(pageNum, pageSize).then((result) => {
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
    let {strategyid, pageNum, pageSize } = req.query
    videoService.fiindValug(strategyid,pageNum, pageSize).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    })

})


// 自己特有的 TODO:

// 根据权限id数组进行查询，服务器角色查询对应的权限
router.post('/findByIds', (req, res, next) => {
    consoleLog(`动态路由请求数据${JSON.stringify(req.body)}`, 'blue')
    videoService.findByIds(req.body.list, req.body.pageNum, req.body.pageSize).then((result) => {
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
    videoService.updatById(req.params.id, req.body).then((result) => {
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
    videoService.deletById(req.params.id).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        consoleLog(JSON.stringify(err), 'red')
        res.status(500).json(err)
    })
})


export default router;
