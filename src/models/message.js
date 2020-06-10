//  推送消息服务实体信息，这里只用于系统消息、商家活动推送这些
// 攻略标签信息

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-03 21:06:58
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    receiverType:Number,//接收者类型，1表示所有管理员，2表示商家
    publishId:Schema.Types.ObjectId,
    publisher:String,// 推送者
    state:{
        type:Number,
        default:0
    },// 状态是否已读,0表示未读，1表示已读
    title:String,
    content: String,
    ...commonData // 视频的日期时间就是creattime
});

export default mongoose.model('Message', MessageSchema);