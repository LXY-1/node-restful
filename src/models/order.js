// 支付订单是，当你点击支付的时候，就会产生了，并且会尝试一个有效的时间

/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-12 11:47:19
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 17:33:10
 */
import mongoose from 'mongoose';
import commonData from './commData';

//console.log(mongoose);

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    goodsid:Schema.Types.ObjectId,//关联商品id，
    combol:[{
        price:Number,
        beginTime:Date 
      }],//购买的套餐，日期，价格/人/天
    realprice: Number,//实际支付价格
    status:Number,//支付状态，1 成功，2，待支付，3 取消支付，
    ...commonData
});

export default mongoose.model('Order', OrderSchema);