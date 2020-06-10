/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 23:41:01
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-19 14:51:28
 */
/**
 * @name: 
 * @description: 
 * @msg: 
 * @param {type} 
 * @return: 
 */
const result = {
    // 状态码200,且调用接口执行业务逻辑整个过程完全正确
    'SUCCESS': {
        code: 0,
        data: null,
        message: '请求成功'
    },
    //状态码为200 未登录，没有操作权限
    'UNLOGIN': {
        code: 1,
        data: null,
        message: '未登录'
    },
    // 状态码为200，当前用户角色没有此接口的操作权限
    'UNAUTHOR': {
        code: 2,
        data: null,
        message: '没有此接口操作权限'
    },
    'NOUSER': {
        code: 3,
        data: null,
        message: '用户不存在'
    },
    'FROZEN': {
        code: 4,
        data: null,
        message: '用户被冻结了'
    },
    // 请求失败，状态码500，后台出错——数据库操作失败或者是其他地方代码出错
    'ERROR-500':{
        message:'error-服务器内部错误',
        err:null
    },
    // 接口参数错误
    'ERROR-400':{
       message:'error-请求参数有误',
       err:null
    }
}

export default result