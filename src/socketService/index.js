/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-06-05 12:12:59
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-05 13:43:33
 */ 
const express = require('express')

const app = express();

const serverPort = 8085

var server = app.listen(serverPort)

var io = require('socket.io').listen(server)

console.log('socket服务已经开启')

io.on('connect',(socket) =>{
    console.log('一个用户连接进来了')
    socket.on('pending',data => {
        // 广播
        socket.broadcast.emit('pendinMessage',data)
        console.log(0)
    })
})



