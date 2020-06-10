/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-06-02 10:18:52
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 09:34:01
 */ 


import { Router } from 'express'; // call express
import path from 'path'
const multiparty = require('multiparty');
import consoleLog from '../utils/consoleLog';
const router = Router();


const pUrl = 'http://192.168.43.98:8081/upload/images/';

const vUrl = 'http://192.168.43.98:8081/upload/videos/';

/**
 * @name: 
 * @description: 上传图片接口
 * @msg: 
 * @param {type} 字段： type 1:头像 2 ： 表示攻略和游记  file: 图片文件
 * @return: 
 */
router.post('/uploadPic', function (req, res, next) {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: path.join(__dirname, '../public/upload/images') });

    // 执行之后自动上传图片到上面的目录，然后fields是前端表单数据，files是图片上传成功后返回的对象，其中保存的图片路径就在里面
    form.parse(req, function (err, fields, files) {

        // 获取表单 (formData) 包含的包括图片文件以及其它啊的字段内容。
        consoleLog(fields.name, 'yellow') // 前端表单数据
        consoleLog(files.file[0].path, 'yellow')//图片上传成功返回的信息。
        //  consoleLog(fi,'yellow')
        // var filesTmp = JSON.stringify(files);

        //处理
        if (err) {
            console.log('parse error: ' + err);
            res.status(500).json(err)
        } else {
            // 重命名图片和返回图片地址
            let picPath = files.file[0].path;
            let ind = picPath.indexOf('images');
            let WatchPicUrl = pUrl + picPath.slice(ind+7);
            res.status(200).json({
                code: 0,
                imgSrc:WatchPicUrl
            })
        }
    });
})

/**
 * @name: 
 * @description: 上传视频接口
 * @msg: 
 * @param {type} 
 * @return: 
 */
router.post('/uploadVideo', function (req, res, next) {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({ uploadDir: path.join(__dirname, '../public/upload/videos') });

    // 执行之后自动上传图片到上面的目录，然后fields是前端表单数据，files是图片上传成功后返回的对象，其中保存的图片路径就在里面
    form.parse(req, function (err, fields, files) {

        // 获取表单 (formData) 包含的包括图片文件以及其它啊的字段内容。
        consoleLog(fields.name, 'yellow') // 前端表单数据
        consoleLog(files.file[0].path, 'yellow')//图片上传成功返回的信息。
        //  consoleLog(fi,'yellow')
        // var filesTmp = JSON.stringify(files);

        //处理
        if (err) {
            console.log('parse error: ' + err);
            res.status(500).json(err)
        } else {
            // 重命名视频和返回图片地址
            let picPath = files.file[0].path;
            let ind = picPath.indexOf('videos');
            let WatchPicUrl = vUrl + picPath.slice(ind+7);
            res.status(200).json({
                code: 0,
                videoSrc:WatchPicUrl
            })
        }
    });
})

export default router