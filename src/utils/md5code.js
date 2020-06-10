/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-18 10:26:16
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-18 10:29:12
 */ 


import md5 from 'md5'

/**
 * @name: 
 * @description: md5加密后返回
 * @msg: 
 * @param {type} string | 需要加密的参数
 * @return: 
 */
function md5code(string) {
    return md5(string)
}

export default md5code