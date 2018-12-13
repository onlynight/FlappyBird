// @author: wyndam
// @email: only.night@qq.com

import Group from './group.js'

// 定义对其方式，使用移位操作是为了可以用一个值表示队中对其方式，
// 例如靠右下角对其我们可以写成： Gravity.RIGHT | Gravity.BOTTOM
// 居中对齐由于和其他对其方式冲突，所以单独设置一个值不使用移位
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
      // FrameLayout 的布局依赖 this.sprite 的尺寸，所以这里要先对子控件进行布局
      // 否则可能会出现闪烁的情况
      if (this.sprite instanceof Group) {
        this.sprite.layout()
      }

      // 根据不同的对其方式设置 this.sprite 的坐标来达到布局的效果
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