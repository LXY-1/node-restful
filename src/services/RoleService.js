/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 19:18:18
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-18 12:18:12
 */
import RoleDao from '../dao/RoleDao';
import responResult from '../utils/responResult';

const rDao = new RoleDao()

class RoleService {

    /**
     * @name: 
     * @description: 添加权限,插入一个doucmetn
     * @msg: 
     * @param {type} 
     * @return: 
     */
    add(obj) {

        return new Promise((resolve, reject) => {
            rDao.save(obj).then(result => {
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
            rDao.inseratMany(list).then((result) => {
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
            rDao.findOne(condtion).then((result) => {
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
            rDao.findAllByPage(pageObj).then((result) => {
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
    * @param {type} | 权限字段 |rolename
    * @param {type} | 分页字段 | pageNum  pagesiez 
    * @return: 
    */
    fiindValug(rolename, pageNum, pageSize) {

        // 具体的添加规则，在这里封装比如根据title、parenttitle模糊查询，满足其中一个就可以了，注意mongoose模糊查询是利用传入正则表达式实现的
        let rolenameReg = new RegExp(rolename, 'i')
        let condition = {
            $or: [
                { rolename: rolenameReg }
            ]
        }

        let pageObj = {
            pageNum: pageNum,
            pageSize: pageSize
        }
        return new Promise((resolve, reject) => {
            rDao.findByVgue(condition, pageObj).then((result) => {
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
            rDao.update(condtion, updateObj).then((result) => {
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
            rDao.remove(condtion).then((result) => {
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

export default RoleService