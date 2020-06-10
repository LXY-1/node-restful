/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-02 16:18:21
 */

import User from '../models/user';
import BaseDao from './BaseDao';


class UserDao  extends BaseDao{
    constructor () {
       // 调用父类构造函数，将 model传递过去
       super(User)
    }
 // 如果该实体还有其他特殊的操作，再在这里扩充方法

}

export default UserDao