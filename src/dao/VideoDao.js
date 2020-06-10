/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-05-13 16:04:41
 * @LastEditors: lxw
 * @LastEditTime: 2020-06-04 10:24:03
 */

import Video from '../models/video';
import BaseDao from './BaseDao';


class VideoDao  extends BaseDao{
    constructor () {
       // 调用父类构造函数，将 model传递过去
       super(Video)
    }
 // 如果该实体还有其他特殊的操作，再在这里扩充方法

}

export default VideoDao