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
    }
    let temp = Object.assign(defaultSetting, settings)
    super('', temp.x, temp.y, temp.width, temp.height, false)
  }

  layout() {}

  draw(ctx) {
    this.layout()
  }
}