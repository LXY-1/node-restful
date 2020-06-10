
// 封装一些统用的数据库操作——基本的增删改查


class BaseDao {
    /**
     * 子类构造传入对应的 Model 类
     *
     * @param Model
     */
    constructor(Model) {
        this.Model = Model;
    }


    /**
     * 使用 Model 的 静态方法 create() 添加一条 doc
     *
     * @param obj 构造实体的对象
     * @returns {Promise}
     */
    async create(obj) {
        let entity = new this.Model(obj);
        let dao = await this.Model.create(entity);
        console.log('create result--> ', dao);
        return dao
    }



    /**
     * 使用 Model save() 添加 一条记录doc
     *
     * @param obj 构造实体的对象
     * @returns {Promise}
     */
    async save(obj) {
        let entity = new this.Model(obj);
        let result = await entity.save();
        return result
        
    }

    /**
     * @name: 
     * @description: 通过数组，调用mongosse插入多条记录api批量插入集合
     * @msg: 
     * @param {type} 
     * @return: 
     */
    async inseratMany(list){
       let result = await this.Model.insertMany(list)
       return result
    }


    /**
     * 查询所有符合条件 docs
     *
     * @param condition 查找条件
     * @param constraints 查找配置
     * @returns {Promise}
     */
    async findAll(condition, constraints) {

        try {
            let data = await this.Model.find(condition, constraints ? constraints : null);
            return data;
        } catch (error) {
            console.log('findAll error--> ', error);
            return error;
        }
    }


    /**
     * 查找符合条件的第一条 doc,这里也包括根据id这些字段的查询，且只查询一条
     *
     * @param condition 查询条件
     * @param constraints 查找配置
     * @returns {Promise}
     */
    async findOne(condition, constraints) {
        let data = await this.Model.findOne(condition, constraints ? constraints : null);
        return data;
    }


    /**
     * 查找排序之后的第一条
     *
     * @param condition
     * @param orderColumn
     * @param orderType
     * @returns {Promise}
     */
    async findOneByOrder(condition, orderColumn, orderType) {
        try {
            let data = await this.Model.findOne(condition)
                .sort({ [orderColumn]: orderType })
                .exec();
            return data;
        } catch (error) {
            console.log(`findOneByOrder--> ${error}`);
            return error;
        }
    }


    
    /**
     * @name: 
     * @description: 分页 + 无条件查询
     * @msg: 
     * @param {Object} pageObj |  pageNUm + pageSize
     * @return: {Promise}
     */    
    async findAllByPage(pageObj){
         
        const {pageNum = 1, pageSize =10 } = pageObj
      
        // 获取总数
        let count = await this.Model.find().count()
        let data = await this.Model.find()
            .skip((pageNum - 1) * pageSize)
            .limit(+pageSize)
            .exec()
        return {count:count,data:data}    
   }


/**
     * @name: 
     * @description: 分页 + 字段排序
     * @msg: 
     * @param {Object} pageObj |  pageNUm + pageSize
     * * @param orderColumn orderType(1是正序 -1是倒叙)
     * @return: {Promise}
     */    
    async findAllByOrder(pageObj,orderColumn,orderType){
         
        const {pageNum = 1, pageSize =10 } = pageObj
        let condition = { pendingState : 1 }
      
        // 获取总数
        let count = await this.Model.find(condition).count()
        let data = await this.Model.find(condition)
            .skip((pageNum - 1) * pageSize)
            .limit(+pageSize)
            .sort({ [orderColumn]: orderType })
            .exec()
        return {count:count,data:data}    
   }





   /**
     * @name: 
     * @description: 分页 + 多条件模糊查询 具体的条件再service层组装好
     * @msg: 
      * @param {Object} condition | 具体的条件再service层组装好
     * @param {Object} pageObj |  pageNUm + pageSize
     * @return: {Promise}
     */    
    async findByVgue(condition,pageObj){
         
        const {pageNum = 1, pageSize =10 } = pageObj
      
        // 获取总数
        let count = await this.Model.find(condition).count() 
        let data = await this.Model.find(condition,{__v:0},{ sort : { _id : 1 }}) // 不返回__v字段 ，按照id正序排序，默认数组这个不用谢
            .skip((pageNum - 1) * pageSize)
            .limit(+pageSize)
            .exec()
        return {count:count,data:data}    
   }


 /**
     * @name: 
     * @description: 分页 + 根据id数组进行查询，如角色里面的一个数组字段保存了多个权限id
     * @msg: 
     * @param {Object} pageObj |  pageNUm + pageSize 
     * * @param {Object} idList |  要查找的实体id数组 
     * @return: {Promise}
     */    
    async findByIdArray(idList,pageObj){
         
        const {pageNum = 1, pageSize =10 } = pageObj
      
        // 获取总数
        let count = await this.Model.find({_id: { $in:idList }}).count()
        let data = await this.Model.find({_id: { $in:idList }})
            .skip((pageNum - 1) * pageSize)
            .limit(+pageSize)
            .exec()
        return {count:count,data:data}    
   }


    /**
     * @name: 
     * @description: 分页 + 条件(非模糊) + 排序
     * @msg: 
     * @param {Object} condition | 实体字段条件 + pageNUm + pageSize
     * @param {String} orderColumn | 排序字段
     * @param {Number} orderType | 排序类型 -1降序 1是升序
     * @return: {Promise}
     */    
    async findByPage(condition,pageObj,orderColumn,orderType){
         const {pageNum = 1, pageSize =10 } = pageObj
         // 获取总数
         let count = await this.Model.find(condition).count()
         let data = await this.Model.find(condition)
             .skip((pageNum - 1) * pageSize)
             .limit(pageSize)
             .sort({[orderColumn]:orderType})
             .exec()
         return {count:count,data:data}    
    }


    /**
     * 更新 docs
     *
     * @param condition 查找条件
     * @param updater 更新操作
     * @returns {Promise}
     */
    async update(condition, updater) {
        let result = await this.Model.update(condition, updater);
        return result;
    }


    /**
     * 移除 doc
     *
     * @param condition 查找条件
     * @returns {Promise}
     */
    async remove(condition) {
        try {
            let result = await this.Model.remove(condition);
            return result;
        } catch (error) {
            console.log(`remove error--> ${error}`);
            return error;
        }
    }
}


module.exports = BaseDao;