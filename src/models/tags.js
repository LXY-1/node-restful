// 攻略标签信息

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 17:22:55
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var TagsSchema = new Schema({
    content: String,
    ...commonData // 视频的日期时间就是creattime
});

export default mongoose.model('Tags', TagsSchema);