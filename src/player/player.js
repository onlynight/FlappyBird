// @author: wyndam
// @email: only.night@qq.com

import Sprite from '../base/sprite.js'

const PLAYER_WIDTH = 48
const PLAYER_HEIGHT = 48
const PLAYER_GRAVITY_ACC = 0.198

export default class Player extends Sprite {

  constructor(imgSrc, x, y) {
    super(imgSrc, x, y, px2dp(PLAYER_WIDTH), px2dp(PLAYER_HEIGHT))
    this.x = this.x - this.width / 2
    this.y = this.y - this.height / 2
    this.orgY = y
  }

  vt(t) {
    return PLAYER_GRAVITY_ACC * t
  }

  s(t) {
    return this.vt(t) * t / 2
  }

  update() {
    let frame = databus.frame % 60
    let dis = this.s(frame)
    this.y = this.orgY + dis
  }

}