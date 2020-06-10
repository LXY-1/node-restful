//  旅游商品实体

// 攻略实体信息，关联 文章、或短视频，还有内置id数组：收藏用户，点赞用户，评论id

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-22 10:14:42
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var GoodsSchema = new Schema({
    name:String,//商品名称
    introduce: String,//介绍信息
    articlecontent:String,//介绍文章内容，可以为空,指的是商品详情。
    placeRange: String,// 商品价格范围
    combol:[{
      price:Number,
      beginTime:Date,
      endTime:Date,
      personnum:Number//上限人数 
    }],//套餐，日期，价格/人/天
    days:Number,//游玩天数
    comments:[
        {
            grade:Number,//评分
            comments:Schema.Types.ObjectId,//评论id
        }
    ],//商品点评数组
    publishid:Schema.Types.ObjectId,//商家id
    collectionsids:[Schema.Types.ObjectId],//收藏用户id
    hasbuyuserids:[Schema.Types.ObjectId],//购买用户id
    tags:[String],//标签
    startids:[Schema.Types.ObjectId],//点赞用户id
    collectionsids:[Schema.Types.ObjectId],//收藏用户id
    commentids:[Schema.Types.ObjectId],//评论id
    imgs:[String],//图片数组
    dismount:{
        type:String,
        default:'N'
    },//是否下架
    ...commonData
});

export default mongoose.model('Goods', GoodsSchema);