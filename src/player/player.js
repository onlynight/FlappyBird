// @author: wyndam
// @email: only.night@qq.com

import Sprite from '../base/sprite.js'

const PLAYER_WIDTH = 34
const PLAYER_HEIGHT = 24
const PLAYER_GRAVITY_ACC = 0.25
const PLAYER_ACT_V0 = -6

export default class Player extends Sprite {

  constructor(imgSrc, x, y) {
    super(imgSrc, x, y, px2dp(PLAYER_WIDTH), px2dp(PLAYER_HEIGHT))
    this.x = this.x - this.width / 2
    this.y = this.y - this.height / 2
    this.orgY = this.y
    this.act = false
    this.start = 0
    this.actY = 0
    this.acted = false

    let that = this
    canvas.addEventListener('touchstart', ((e) => {
      if (that.visible) {
        this.act = true
        this.acted = true
        this.start = databus.frame
        this.actY = this.y
      }
    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      // this.x = e.touches[0].clientX - PLAYER_WIDTH / 2
      // this.y = e.touches[0].clientY - PLAYER_HEIGHT / 2
    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {}).bind(this))
  }

  vt(acc, t) {
    return acc * t
  }

  sFall(t) {
    return this.vt(PLAYER_GRAVITY_ACC, t) * t / 2
  }

  sAct(t) {
    return ((PLAYER_ACT_V0 + this.vt(PLAYER_GRAVITY_ACC, t)) + PLAYER_ACT_V0) * t / 2
  }

  s(t) {
    if (this.act) {
      if ((PLAYER_ACT_V0 + this.vt(PLAYER_GRAVITY_ACC, t)) <= 0) {
        return this.actY + this.sAct(t)
      } else {
        this.act = false
        this.actY = this.y
        this.start = databus.frame

        return this.actY + this.sFall(0)
      }
    } else {
      return this.actY + this.sFall(t)
    }
  }

  update() {
    if (!this.visible) {
      return
    }

    this.y = (this.acted ? 0 : this.orgY) + this.s(databus.frame - this.start)

    if (this.y <= 0) {
      this.y = 0
    }
  }

}