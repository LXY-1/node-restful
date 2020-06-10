//  用户微信表，记录用户的微信信息
/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 16:10:01
 */
import mongoose from 'mongoose';
// import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var UserWchatSchema = new Schema({
    openid:String
});

export default mongoose.model('Userwchat', UserWchatSchema);