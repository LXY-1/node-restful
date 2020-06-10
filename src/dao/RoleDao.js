/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-15 11:41:44
 */

import Role from '../models/role';
import BaseDao from './BaseDao';


class RoleDao  extends BaseDao{
    constructor () {
       // 调用父类构造函数，将 model传递过去
       super(Role)
    }
 // 如果该实体还有其他特殊的操作，再在这里扩充方法

}

export default RoleDao