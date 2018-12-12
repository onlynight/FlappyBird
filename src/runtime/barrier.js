// @author: wyndam
// @email: only.night@qq.com

import EvnItem from '../runtime/envItem.js'

const BARRIER_IMG_SRC = 'images/pipe_down.png'
const BARRIER_IMG1_SRC = 'images/pipe_up.png'
const BARRIER_WIDTH = 52
const BARRIER_HEIGHT = 320

export default class Barrier extends EvnItem {

  constructor() {
    super(BARRIER_IMG_SRC, 0, 0, BARRIER_WIDTH, BARRIER_HEIGHT)

    this.left = 0
  }

  init(imgSrc, x, y, width, height) {
    this.img.src = imgSrc
    this.x = x
    this.y = y
    this.start = x
    this.width = width
    this.height = height

    this.visible = true
    this.left = 0
  }

  setLeft(left) {
    this.left = left
  }

  update() {
    if (!this.visible) {
      return
    }

    super.update()

    this.x = this.start + this.left

    if (this.x <= -(window.innerWidth + this.width)) {
      databus.recycleBarrier(this)
    }
  }

}