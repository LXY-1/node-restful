/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-12 11:47:41
 */
import mongoose from 'mongoose';

//console.log(mongoose);

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    nickname: String,
    gender: Number,
    password: String,
    createdTime: { type: Date, default: Date.now },
    role: Number  //1: admin 2: group owner, 3: normal user
});

export default mongoose.model('User', UserSchema);