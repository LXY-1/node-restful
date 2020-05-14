/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 15:48:09
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-13 15:49:46
 */


/**
 * 
 * 该模块用于连接数据库，暴露出去一个Promise实例
 * 如果连接陈成功了，Promise实例内部状态切换未成功
 * 如果连接陈失败了，Promise实例内部状态切换为失败
 * 
 */

// 引入mongosse
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
// 定义数据库名
const DB_NAME = 'free-travel'
// 定义数据库地址
const DB_URL = 'localhost'
// 定义端口号
const PORT = '27017'

// 连接数据库

// 使用 promise + async 解决 异步回调地狱问题

module.exports = new Promise((resolve, reject) => {
    // { useNewUrlParser: true ,useUnifiedTopology: true}使用的目的 为了安全，老版本具有安全问题。
    mongoose.connect(`mongodb://${DB_URL}:${PORT}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })

    // 监听连接状态 mongoose.connection对象是监听对象，里面有相关的事件可以监听
    mongoose.connection.on('open', (err) => {
        if (!err) {
            console.log('连接数据库成功')
            resolve()
        } else {
            reject(err)
        }
    })
});

