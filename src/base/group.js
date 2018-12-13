// @author: wyndam
// @email: only.night@qq.com

import Sprite from './sprite.js'

export default class Group extends Sprite {
  constructor(settings) {
    let defaultSetting = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      hasImg: false
    }
    let temp = Object.assign(defaultSetting, settings)
    super('', temp.x, temp.y, temp.width, temp.height, temp.hasImg)

    this.layouted = false
  }

  layout() {}

  draw(ctx) {
    this.layout()
  }
}