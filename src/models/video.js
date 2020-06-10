/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 16:56:03
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var VideoSchema = new Schema({
    title: String,
    url:String,
    strategyid:Schema.Types.ObjectId,//关联的攻略id
    ...commonData // 视频的日期时间就是creattime
});

export default mongoose.model('Video', VideoSchema);