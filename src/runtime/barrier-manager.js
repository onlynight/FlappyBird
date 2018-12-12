// @author: wyndam
// @email: only.night@qq.com

import Barrier from './barrier.js'

export default class BarrierManager {

  constructor() {}

  generateBarriers(frame) {
    if (frame % databus.barrierGenFrame === 0) {
      let barrier = databus.generateBarrier('images/pipe_down.png', 'images/pipe_up.png',
        window.innerWidth, px2dp(-80), px2dp(100))

      databus.barriers.push(barrier)
    }
  }

  drawToCanvas(ctx) {
    for (let i = 0; i < databus.barriers.length; i++) {
      databus.barriers[i].drawToCanvas(ctx)
    }
  }

  update() {
    for (let i = 0; i < databus.barriers.length; i++) {
      databus.barriers[i].update()
    }
  }

}