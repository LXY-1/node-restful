/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-14 15:49:40
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 15:52:06
 */
// 一些每个集合的文档都必须要的字段
let commonData = {
    createdTime: {
        type: Date,
        default: Date.now
    },
    enable_flag: {
        type: String,
        default: 'Y'
    }
}

export default commonData