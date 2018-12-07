// @author: wyndam
// @email: only.night@qq.com

import EvnItem from '../runtime/envItem.js'

const LAND_IMG_SRC = 'images/land.png'
const LAND_IMG_WIDTH = 336
const LAND_IMG_HEIGHT = 112

export default class Land extends EvnItem {

  constructor() {
    super(LAND_IMG_SRC, 0, 0, LAND_IMG_WIDTH, LAND_IMG_HEIGHT)
    this.width = px2dp(this.width)
    this.height = px2dp(this.height)
    this.left = 0
  }

  drawToCanvas(ctx) {
    ctx.drawImage(
      this.img,
      this.x + this.left,
      this.y + window.innerHeight - this.height,
      this.width,
      this.height
    )

    ctx.drawImage(
      this.img,
      this.x + this.left + window.innerWidth,
      this.y + window.innerHeight - this.height,
      this.width,
      this.height
    )
  }

  update() {
    super.update()

    if (this.left <= -window.innerWidth) {
      this.left = 0
    }
  }

}