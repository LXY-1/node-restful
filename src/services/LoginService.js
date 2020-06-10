/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-15 14:41:36
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-02 16:59:13
 */
import AdminDao from '../dao/AdminDao'
import UserDao from '../dao/UserDao'
import responResult from '../utils/responResult';
import md5code from '../utils/md5code';

const aDao = new AdminDao()

const uDao = new UserDao()

class LoginService {

    /**
     * @name: 
     * @description: 
     * @msg: 
     * @param {type} username
     * @param {type} password
     * @param {type} req 请求对象
     * @return: 
     */
    adminerLogin(request) {
        // session存储
        let obj = request.body
        obj.password = md5code(obj.password)
        return new Promise((resolve, reject) => {
            aDao.findOne(obj).then((result) => {
                if (result) {
                    console.log(result)
                    // 判断账号是否被冻结或者是被逻辑删除
                    if (result.enable_flag === 'N') {
                        responResult['FROZEN'].data = result
                        resolve(responResult['FROZEN'])
                        return
                    }

                    // session操作
                    //1.在服务器中开辟一块内存，用于存储session
                    //2.将用户的id存入上一步产生的session中
                    //3.获取session的编号，放入一个cookie中
                    //4.将上一步的cookie返回给客户端
                    //以上四步可以通过一行代码搞定
                    request.session._id = result._id
                    console.log(`请求成功${result}`)
                    // 请求成功返回成功的json 状态码200
                    responResult['SUCCESS'].data = result
                    responResult['SUCCESS'].message = '请求成功'
                    resolve(responResult['SUCCESS'])
                } else {
                    responResult['NOUSER'].data = result
                    resolve(responResult['NOUSER'])
                }
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = error
                reject(responResult['ERROR-500'])
            });
        });



    }

       /**
     * @name: 
     * @description: 
     * @msg: 
     * @param {type} phone
     * @param {type} password
     * @param {type} req 请求对象
     * @return: 
     */
    userLogin(request) {
        // session存储
        let obj = request.body
        obj.password = md5code(obj.password)
        return new Promise((resolve, reject) => {
            uDao.findOne(obj).then((result) => {
                if (result) {
                    console.log(result)
                    // 判断账号是否被冻结或者是被逻辑删除
                    if (result.enable_flag === 'N') {
                        responResult['FROZEN'].data = result
                        resolve(responResult['FROZEN'])
                        return
                    }

                    // session操作
                    //1.在服务器中开辟一块内存，用于存储session
                    //2.将用户的id存入上一步产生的session中
                    //3.获取session的编号，放入一个cookie中
                    //4.将上一步的cookie返回给客户端
                    //以上四步可以通过一行代码搞定
                    request.session._id = result._id
                    console.log(`请求成功${result}`)
                    // 请求成功返回成功的json 状态码200
                    responResult['SUCCESS'].data = result
                    responResult['SUCCESS'].message = '请求成功'
                    resolve(responResult['SUCCESS'])
                } else {
                    responResult['NOUSER'].data = result
                    resolve(responResult['NOUSER'])
                }
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = error
                reject(responResult['ERROR-500'])
            });
        });



    }

}

export default LoginService