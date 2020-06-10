//  推送消息服务实体信息，这里只用于系统消息、商家活动推送这些
// 攻略标签信息

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 17:28:10
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var PushInfoSchema = new Schema({
    publisher:String,// 推送者
    reser:String,//接收者
    title:String,
    content: String,
    ...commonData // 视频的日期时间就是creattime
});

export default mongoose.model('PushInfo', PushInfoSchema);