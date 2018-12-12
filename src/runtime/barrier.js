// @author: wyndam
// @email: only.night@qq.com

import EvnItem from '../runtime/envItem.js'

const BARRIER_IMG_SRC = 'images/pipe_down.png'
const BARRIER_IMG1_SRC = 'images/pipe_up.png'
const BARRIER_WIDTH = 52
const BARRIER_HEIGHT = 320

let index = -1

export default class Barrier extends EvnItem {

  constructor() {
    super(BARRIER_IMG_SRC, 0, 0, BARRIER_WIDTH, BARRIER_HEIGHT)

    this.width = px2dp(this.width) / 1.3
    this.height = px2dp(this.height) / 1.3

    this.img1 = new Image()
    this.img1.src = BARRIER_IMG1_SRC

    this.left = 0
    this.blank = 100
    this.index = index++
  }

  init(barrierTop, barrierBottom, x, y, blank) {
    this.img.src = barrierTop
    this.img1.src = barrierBottom
    this.x = x
    this.y = y
    this.blank = blank
    this.visible = true
    this.left = 0
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return
    }

    ctx.drawImage(
      this.img,
      this.x + this.left,
      this.y,
      this.width,
      this.height
    )

    ctx.drawImage(
      this.img1,
      this.x + this.left,
      this.y + this.blank + this.height,
      this.width,
      this.height
    )
  }

  update() {
    if (!this.visible) {
      return
    }

    super.update()

    if (this.left <= -(window.innerWidth + this.width)) {
      databus.recycleBarrier(this)
    }
  }

}