// @author: wyndam
// @email: only.night@qq.com

import Sprite from '../base/sprite.js'
import Barrier from '../runtime/barrier.js'

const BARRIER_IMG_SRC = 'images/pipe_down.png'
const BARRIER_IMG1_SRC = 'images/pipe_up.png'
const BARRIER_WIDTH = 52
const BARRIER_HEIGHT = 320

export default class BarrierPair extends Sprite {

  constructor() {
    super(BARRIER_IMG_SRC, 0, 0, BARRIER_WIDTH, BARRIER_HEIGHT)

    this.width = px2dp(this.width) / 1.3
    this.height = px2dp(this.height) / 1.3

    this.left = 0
    this.blank = 100

    this.topBarrier = new Barrier()
    this.bottomBarrier = new Barrier()
  }

  init(barrierTopImg, barrierBottomImg, x, y, blank) {
    this.topBarrier.init(barrierTopImg, x, y, this.width, this.height)
    this.bottomBarrier.init(barrierBottomImg, x, y + this.topBarrier.height + blank, this.width, this.height)

    this.blank = blank
    this.visible = true
    this.left = 0
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return
    }

    this.topBarrier.drawToCanvas(ctx)
    this.bottomBarrier.drawToCanvas(ctx)
  }

  update() {
    if (!this.visible) {
      return
    }

    this.topBarrier.update()
    this.bottomBarrier.update()
  }

  isCollideEdgeWith(target) {
    return (this.topBarrier.isCollideEdgeWith(target) || this.bottomBarrier.isCollideEdgeWith(target))
  }

}