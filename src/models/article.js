/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 16:54:32
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    content:String,
    travelid:Schema.Types.ObjectId,//关联的游记id
    strategyid:Schema.Types.ObjectId,//关联的攻略id
    ...commonData // 文章的日期时间就是creattime
});

export default mongoose.model('Article', ArticleSchema);