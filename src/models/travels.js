/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-14 16:38:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 13:12:52
 */
//  游记实体 , 一个游记 关联 多篇文章

import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var travelsSchema = new Schema({
    placename: String,//景点名称，如s上海城市规划展示馆，前端支持模糊查询或者是自定义填写
    city:'', // 景点城市，这里前端采用模糊查询获取即可
    title: String,// 游记总标题
    cover:String,//封面
    watchtimes:Number,//浏览次数
    beginTime:Date,//出发时间
    avgPrice:Number,// 人均费用
    peopleIntroduce:String,//人物说明
    days:Number,//出行天数
    travelForm:String,//出现形式，自驾游等等\
    startnum:{
        default:0,
        type:Number
    },
    puhlishid:{
        type:Schema.Types.ObjectId // 攻略发布者id
    },
    startids:[Schema.Types.ObjectId],//点赞用户id
    collectionsids:[Schema.Types.ObjectId],//收藏用户id
    commentids:[Schema.Types.ObjectId],//评论id
    isOk:{
        type:String,
        default:'N'
    },// 是否审核通过
    isPending:{
        type:String,
        default:'N'
    },//是否已经审核了，再刚刚创建或或者是修改了都设置为N
    unpassreason:String,//如果没有审核通过，需要说明原因，每次审核不通过的时候填写
    ...commonData
});

export default mongoose.model('Travels', travelsSchema);