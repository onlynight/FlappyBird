// @author: wyndam
// @email: only.night@qq.com

import BarrierPair from './barrierPair.js'

export default class BarrierManager {

  constructor() {}

  generateBarriers(frame) {
    if (frame % databus.barrierGenFrame === 0) {
      let barrier = databus.generateBarrier('images/pipe_down.png', 'images/pipe_up.png',
        window.innerWidth, px2dp(-130) + Math.random() * px2dp(100), px2dp(130))

      databus.barriers.push(barrier)
    }
  }

  draw(ctx) {
    for (let i = 0; i < databus.barriers.length; i++) {
      databus.barriers[i].draw(ctx)
    }
  }

  update() {
    for (let i = 0; i < databus.barriers.length; i++) {
      databus.barriers[i].update()
    }
  }

}