/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 19:18:18
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-14 14:21:00
 */
import AdminDao from '../dao/AdminDao'
import responResult from '../utils/responResult';

const aDao = new AdminDao()

class AdminService {

    /**
     * @name: 
     * @description: 添加管理员,插入一个doucmetn
     * @msg: 
     * @param {type} 
     * @return: 
     */
    add(obj) {

        return new Promise((resolve, reject) => {
            aDao.save(obj).then(result => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch(error => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = error
                reject(responResult['ERROR-500'])
            })


        });



    }

}

export default AdminService