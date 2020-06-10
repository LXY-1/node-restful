/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-03 11:19:45
 */

import Strategy from '../models/strategy';
import BaseDao from './BaseDao';


class StrategyDao  extends BaseDao{
    constructor () {
       // 调用父类构造函数，将 model传递过去
       super(Strategy)
    }
 // 如果该实体还有其他特殊的操作，再在这里扩充方法

}

export default StrategyDao