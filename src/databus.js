// @author: wyndam
// @email: only.night@qq.com

import Pool from './base/pool.js'
import BarrierPair from './runtime/barrierPair.js'

window.RATIO = window.innerWidth / 288

window.px2dp = function(px) {
  return px * RATIO
}

let instance

export default class DataBus {

  constructor() {
    if (instance == null) {
      instance = this
    } else {
      return instance
    }

    // 从开始到现在的帧数
    this.frame = 0
    // 游戏是否在运行，是否需要更新
    this.running = true
    // 游戏是否结束
    this.gameOver = false
    // 障碍物显示队列
    this.barriers = []
    // 缓存对象池
    this.pool = new Pool()

    // 全局难度参数
    this.speed = 2 // 速度
    this.barrierGenFrame = 80 // 生成障碍物间隔帧数
  }

  /**
   * 从添加到绘制的障碍物列表中回收不显示的用于新障碍物的显示
   */
  recycleBarrier(barrier) {
    if (barrier != null) {

      // let temp = null
      // let index = -1
      // for (let i = 0; i < this.barriers.length; i++) {
      //   if (this.barriers[i].index == barrier.index) {
      //     temp = this.barriers[i]
      //     index = i
      //     break
      //   }
      // }

      // if (temp != null) {
      //   this.barriers.splice(index, 1)
      //   temp.visible = false
      //   this.pool.put('barrier', temp)
      //   // temp = null
      // }

      barrier.visible = false
      let temp = this.barriers.shift()
      temp.visible = false
      this.barriers[0].left -= this.speed
      this.pool.put('barrier', temp)
    }
  }

  /**
   * 从对象池中去除障碍物组合对象，没有的话就创建一个
   */
  generateBarrier(barrierTop, barrierBottom, x, y, blank) {
    let barrier = this.pool.get('barrier')

    if (barrier != null) {
      barrier.init(barrierTop, barrierBottom, x, y, blank)
      return barrier
    } else {
      let temp = new BarrierPair()
      temp.init(barrierTop, barrierBottom, x, y, blank)
      return temp
    }
  }

}

window.databus = new DataBus()