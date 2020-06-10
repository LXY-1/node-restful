/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 19:18:18
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-02 17:01:16
 */
import UserDao from '../dao/UserDao';
import responResult from '../utils/responResult';
import md5code from '../utils/md5code.js';

const uDao = new UserDao()

class UserService {

    /**
     * @name: 
     * @description: 添加权限,插入一个doucmetn
     * @msg: 
     * @param {type} 
     * @return: 
     */
    add(obj) {

        obj.password = md5code(obj.password)
        return new Promise((resolve, reject) => {
           uDao.save(obj).then(result => {
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
    /**
     * @name: 
     * @description: 添加多条权限记录
     * @msg: 
     * @param {Array} | list [permisionObj]
     * @return: 
     */
    addMany(list) {
        return new Promise((resolve, reject) => {
           uDao.inseratMany(list).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
     * @name: 
     * @description: 根据id查询
     * @msg: 
     * @param {type} | id
     * @return: 
     */
    findById(id) {
        let condtion = {
            _id: id
        }
        return new Promise((resolve, reject) => {
           uDao.findOne(condtion).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
     * @name: 
     * @description: 分页查询全部
     * @msg: 
     * @param {type} | pagesiez pagenum
     * @return: 
     */
    findAll(pageNum, pageSize) {
        let pageObj = {
            pageNum: pageNum,
            pageSize: pageSize
        }
        return new Promise((resolve, reject) => {
           uDao.findAllByPage(pageObj).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
    * @name: 
    * @description: 分页 + 多添加模糊查询
    * @msg: 
    * @param {type} | 权限字段 |title parenttitle
    * @param {type} | 分页字段 | pageNum  pagesiez 
    * @return: 
    */
    fiindValug(title, parenttitle, pageNum, pageSize) {

        // 具体的添加规则，在这里封装比如根据title、parenttitle模糊查询，满足其中一个就可以了，注意mongoose模糊查询是利用传入正则表达式实现的
        let titleReg = new RegExp(title, 'i')
        let parenttitleReg = new RegExp(parenttitle, 'i')
        let condition = {
            $or: [
                { title: titleReg },
                { parenttitle: parenttitleReg }
            ]
        }

        let pageObj = {
            pageNum: pageNum,
            pageSize: pageSize
        }
        return new Promise((resolve, reject) => {
           uDao.findByVgue(condition, pageObj).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
     * @name: 
     * @description: 根据权限id数组 分页查询全部
     * @msg: 
     * @param {type} | pagesiez pagenum
     * @return: 
     */
    findByIds(idlists, pageNum, pageSize) {
        let pageObj = {
            pageNum: pageNum,
            pageSize: pageSize
        }
        return new Promise((resolve, reject) => {
           uDao.findByIdArray(idlists, pageObj).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
     * @name: 
     * @description: 根据角色id进行更新
     * @msg: 
     * @param {type} | id | obj
     * @return: 
     */
    updatById(id, updateObj) {
        let condtion = {
            _id: id
        }
        return new Promise((resolve, reject) => {
           uDao.update(condtion, updateObj).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

    /**
     * @name: 
     * @description: 
     * @msg: 
     * @param {type} id | id值
     * @return: 
     */
    deletById(id) {
        let condtion = {
            _id: id
        }
        return new Promise((resolve, reject) => {
           uDao.remove(condtion).then((result) => {
                console.log(`请求成功${result}`)
                // 请求成功返回成功的json 状态码200
                responResult['SUCCESS'].data = result
                resolve(responResult['SUCCESS'])
            }).catch((err) => {
                // 返回失败的json，状态码500
                responResult['ERROR-500'].message = '数据库操作失败'
                responResult['ERROR-500'].err = err
                reject(responResult['ERROR-500'])
            });
        });
    }

}

export default UserService