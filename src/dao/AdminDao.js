/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-13 19:27:29
 */

import Adminer from '../models/admin.js';


class AdminDao {
    constructor () {
        
    }
 /**
   * 使用 Model save() 往数据库管理员集合添加一个document。
   *
   * @param obj 构造实体的对象,超级管理员集合的document对应modelo的Admin
   * @returns {Promise}
   */
  async save(obj) {
    let entity = new Adminer(obj)
    try {
      let result = await entity.save();
      return result;
    } catch (error) {
      console.log('save error--> ', error);
      return error;
    }
  }

}

export default AdminDao