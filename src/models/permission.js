/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 16:19:56
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var PermisionSchema = new Schema({
    url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
    parenttitle:{
        type:String,
        required:true
    },
    dirname:{
        type:String,
        required:true
    },
    ...commonData
});

export default mongoose.model('Permision', PermisionSchema);