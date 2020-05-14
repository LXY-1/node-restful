/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 15:52:58
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-13 15:57:55
 */
import mongoose from 'mongoose';

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
    createdTime: { 
        type: Date, 
        default: Date.now
     },
     enable_flag:{
        type:String,
        default:'Y'
      }
});

export default mongoose.model('Adminer', AdminSchema);