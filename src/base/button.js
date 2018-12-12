// @author: wyndam
// @email: only.night@qq.com

import Sprite from './sprite.js'

export default class Button extends Sprite {

  constructor(imgSrc, x, y, width, height) {
    super(imgSrc, x, y, width, height)

    this.callback = null

    this.__init()
  }

  __init() {
    canvas.addEventListener('touchstart', ((e) => {
      if (this.callback != null &&
        this.__matchedClick(e.touches[0].clientX, e.touches[0].clientY)) {
        this.callback(this)
      }
    }).bind(this))
  }

  __matchedClick(x, y) {
    // console.log('x = ' + x + ' y = ' + y)
    // console.log('this.x = ' + this.x + ' this.y = ' + this.y +
    //   ' this.width = ' + this.width + ' this.height = ' + this.height)
    return (x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height)
  }

  setOnClickListener(callback) {
    this.callback = callback
  }

}