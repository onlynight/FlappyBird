// @author: wyndam
// @email: only.night@qq.com

import EvnItem from '../runtime/envItem.js'

const LAND_IMG_SRC = 'images/land.png'
const LAND_IMG_WIDTH = 336
const LAND_IMG_HEIGHT = 112

export default class Land extends EvnItem {

  constructor() {
    super(LAND_IMG_SRC, 0, 0, px2dp(LAND_IMG_WIDTH), px2dp(LAND_IMG_HEIGHT))
    this.left = 0

    this.y = window.innerHeight - this.height
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }

    ctx.drawImage(
      this.img,
      // this.x + this.left,
      // this.y + window.innerHeight - this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )

    ctx.drawImage(
      this.img,
      // this.x + this.left + window.innerWidth,
      // this.y + window.innerHeight - this.height,
      this.x + window.innerWidth,
      this.y,
      this.width,
      this.height
    )
  }

  update() {
    super.update()

    this.x = this.left

    if (this.left <= -window.innerWidth) {
      this.left = 0
    }
  }

  isCollideWith(target) {
    return false
  }

  isCollideEdgeWith(target) {
    if (target == null) {
      return false
    }
    return ((target.y + target.height) >= (this.y + px2dp(5)))
  }

}