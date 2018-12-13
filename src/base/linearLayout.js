// @author: wyndam
// @email: only.night@qq.com

import Group from '../base/group.js'
import Sprite from '../base/sprite.js'

let View = {
  sprite: null,
  gravity: 0
}

window.Direction = {
  VERTICAL: 0,
  HORIZONTAL: 1
}

export default class LinearLayout extends Group {

  constructor(x, y, width, height, direction = Direction.VERTICAL) {
    super({
      x: x,
      y: y,
      width: width,
      height: height
    })

    this.direction = direction
    this.views = []
  }

  addSprite(sprite, gravity) {
    this.views.push({
      sprite: sprite,
      gravity: gravity
    })
  }

  layout() {
    if (!this.visible) {
      return
    }

    let x = 0
    let y = 0

    let temp

    if (this.direction == Direction.VERTICAL) {
      for (let i = 0; i < this.views.length; i++) {
        temp = this.views[i]

        if (temp.gravity == Gravity.CENTER) {
          x = (this.width - temp.sprite.width) / 2
        } else {
          if (temp.gravity & Gravity.RIGHT) {
            x = (this.width - temp.sprite.width)
          }
        }

        temp.sprite.x = this.x + x
        temp.sprite.y = this.y + y

        y += temp.sprite.height
        x = 0
      }
    } else {}

    this.height = y
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }
    super.draw(ctx)

    for (let i = 0; i < this.views.length; i++) {
      this.views[i].sprite.draw(ctx)
    }
  }

}