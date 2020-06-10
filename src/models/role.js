/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 20:16:59
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    rolename: String,
    descrition: String,
    permissionids:[Schema.Types.ObjectId], //权限id
    ...commonData
});

export default mongoose.model('Role', RoleSchema);