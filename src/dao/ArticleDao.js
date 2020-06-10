/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-03 18:27:58
 */

import Article from '../models/article';
import BaseDao from './BaseDao';


class ArticleDao  extends BaseDao{
    constructor () {
       // 调用父类构造函数，将 model传递过去
       super(Article)
    }
 // 如果该实体还有其他特殊的操作，再在这里扩充方法

}

export default ArticleDao