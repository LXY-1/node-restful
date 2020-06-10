/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 15:08:38
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    birthday: String,
    nickname: String,
    introduce: String,
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    sex:{
       type:String,
    },
    address:String,
    countrys:[String],//用户到过的国家数组
    cities:[String],//用户到过的城市数组
    headerUrl:String,//用户头像
    openid: String,// 微信开放id
    collectionTravel:[Schema.Types.ObjectId],
    collectionstrategyids:[Schema.Types.ObjectId],//收藏攻略id数组
    collectiongoodids:[Schema.Types.ObjectId],//收藏商品idid数组
    friendids:[Schema.Types.ObjectId],//关注好友id
    fensiIds:[Schema.Types.ObjectId],
    ...commonData
});

export default mongoose.model('User', UserSchema);