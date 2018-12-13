// @author: wyndam
// @email: only.night@qq.com

import Group from './group.js'

window.Gravity = {
  LEFT: 1,
  RIGHT: 1 << 1,
  TOP: 1 << 2,
  BOTTOM: 1 << 3,
  CENTER_X: 1 << 4,
  CENTER_Y: 1 << 5,
  CENTER: -1
}

export default class FrameLayout extends Group {

  constructor(x, y, width, height) {
    super({
      x: x,
      y: y,
      width: width,
      height: height
    })

    this.gravity = Gravity.LEFT | Gravity.TOP
    this.sprite = null
    this.spriteX = 0
    this.spriteY = 0
  }

  setGravity(gravity) {
    this.gravity = gravity
  }

  setSprite(sprite) {
    this.sprite = sprite
  }

  layout() {
    if (!this.visible) {
      return
    }

    if (this.sprite != null) {
      this.sprite.layout()
      
      if (this.gravity === Gravity.CENTER) {
        let x = (this.width - this.sprite.width) / 2
        let y = (this.height - this.sprite.height) / 2
        this.sprite.x = x
        this.sprite.y = y
      } else {
        if (this.gravity & Gravity.LEFT) {}
        if (this.gravity & Gravity.TOP) {}

        if (this.gravity & Gravity.RIGHT) {
          let x = (this.width - this.sprite.width)
          this.sprite.x = x
        }

        if (this.gravity & Gravity.BOTTOM) {
          let y = (this.height - this.sprite.height)
          this.sprite.y = y
        }

        if (this.gravity & Gravity.CENTER_X) {
          let x = (this.width - this.sprite.width) / 2
          this.sprite.x = x
        }

        if (this.gravity & Gravity.CENTER_Y) {
          let y = (this.height - this.sprite.height) / 2
          this.sprite.y = y
        }
      }
    }
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }
    super.draw(ctx)

    if (this.sprite != null) {
      this.sprite.draw(ctx)
    }
  }

}