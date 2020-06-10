/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 15:52:58
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-19 12:09:07
 */
import mongoose from 'mongoose';
import commonData from './commData';

const Schema = mongoose.Schema

var AdminSchema = new Schema({
    username: {
        type: String,
        default: 'superAdminer',
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    sex: {
        type: String
    },
    age:{
        type: String
    },
    introduce:{
       type: String
    },
    spend:{
      type:Number,//商家加盟费
    },
    // 用户管理角色
    roleid:Schema.Types.ObjectId,
    // 外键，编辑者关联创建它的商家 如果是创建编辑者，需要填入这个id
    businesidid:{
     type: Schema.Types.ObjectId,
    },
    // 外键，商家关联创建它的超级管理员
    adminerid:{
     type: Schema.Types.ObjectId
    },
    ...commonData
});

export default mongoose.model('Adminer', AdminSchema);