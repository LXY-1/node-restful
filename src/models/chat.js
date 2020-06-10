//  聊天记录实体

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 17:35:32
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    publisher:String,// 发送者
    reser:String,//接收者
    content: String,
    ...commonData // 视频的日期时间就是creattime
});

export default mongoose.model('Chat', ChatSchema);