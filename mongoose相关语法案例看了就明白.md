<!--
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-18 11:10:49
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-18 11:18:25
--> 
有些语法函数需要几个参数，明确几个例子你就知道了

比如查询方法，你如果几个参数掌握好了以及mongoose对应的相关条件查询聚合函数等，几乎的查询都可以实现了


比如组合条件or与and + 不返回某些字段 + 其他的一些约束（聚合函数）比如分页比如排序

多看看官方文档再结合一些例子，明确它的语法本质
[link](https://www.cnblogs.com/coolslider/p/7832083.html)


下面例子对find方法的三个参数都进行了使用了

```js
const result = yield User.find(
    {
        $or : [ //多条件，数组
            {nick : {$regex : reg}},
            {email : {$regex : reg}}
        ]
    },
    {
        password : 0 // 返回结果不包含密码字段
    },
    {
        sort : { _id : -1 },// 按照 _id倒序排列
        limit : 100 // 查询100条
    })

```