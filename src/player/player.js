// @author: wyndam
// @email: only.night@qq.com

import Sprite from '../base/sprite.js'

const PLAYER_WIDTH = 48
const PLAYER_HEIGHT = 48

export default class Player extends Sprite {

  constructor(imgSrc, x, y) {
    super(imgSrc, x, y, PLAYER_WIDTH, PLAYER_HEIGHT)
  }

}