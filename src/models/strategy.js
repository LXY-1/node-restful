// 攻略实体信息，关联 文章、或短视频，还有内置id数组：收藏用户，点赞用户，评论id,商家发布的攻略还需要关联商品

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 13:12:43
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var StrategySchema = new Schema({
    placename: String,//景点名称，如s上海城市规划展示馆，前端支持模糊查询或者是自定义填写
    city:'', // 景点城市，这里前端采用模糊查询获取即可
    title: String,
    tags:[String],//标签
    puhlishid:{
        type:Schema.Types.ObjectId // 攻略发布者id
    },
    userHeader:String,
    author:String,//攻略发布者作者名称，仅限于在管理端发布的攻略填写该信息，也就是入驻商家发布的攻略在移动端显示的名称
    goodsid:Schema.Types.ObjectId,//关联商品
    startnum:{
        default:0,
        type:Number
    },
    startids:[Schema.Types.ObjectId],//点赞用户id
    collectionsids:[Schema.Types.ObjectId],//收藏用户id
    commentids:[Schema.Types.ObjectId],//评论id
    type:{ //攻略内容类型：文章还是短视频
        type:String,
    },
    imgs:[String],//图片数组
    isOk:{
        type:String,
        default:'N'
    },// 是否审核通过
    pendingState:{
        default:'0',//默认是0表示未审核查询的时候查询的时候根据这个来
        type:String
    },
    unpassreason:String,//如果没有审核通过该字段不为空
    ...commonData
});

export default mongoose.model('Strategy', StrategySchema);