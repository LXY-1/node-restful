/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-14 17:44:31
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 17:46:34
 */
/**
 * 关于回复用户评论是这样的：有一个replyid记录哪些回复评论的id，也就是你回复了，就会先产生一个评论记录插入 评论表里面，然后返回生成的id push到被评论的评论replyid里面

而且借助这个数组类型可以实现无限嵌套评论，只是需要不断查询评论1的回复评论数组里面的b，b里面的回复评论数组，这里我就做三级吧

字段：评论内容，评论用户id，评论状态哪个逻辑删除字段，回复评论id
 */

import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    userid:Schema.Types.ObjectId,
    content: String,
    repalyids:[Schema.Types.ObjectId],//回复评论id
    ...commonData // 论状态哪个逻辑删除字段
});

export default mongoose.model('Comment', CommentSchema);