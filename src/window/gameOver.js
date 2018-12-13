// @author: wyndam
// @email: only.night@qq.com

import Button from '../base/button.js'
import Group from '../base/group.js'
import Sprite from '../base/sprite.js'
import FrameLayout from '../base/frameLayout.js'
import LinearLayout from '../base/linearLayout.js'

export default class GameOverWindow extends Group {

  constructor() {
    super({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    })

    let that = this
    this.restartCallback = null

    this.contentLayout = new LinearLayout(0, 0, window.innerWidth, window.innerHeight)

    this.frame = new FrameLayout(0, 0, window.innerWidth, window.innerHeight)
    this.frame.setGravity(Gravity.CENTER)
    this.frame.setSprite(this.contentLayout)

    this.gameOverImg = new Sprite('images/text_game_over.png', 0, 0, 204, 54)
    this.startGameButton = new Button('images/button_play.png', 0, 0, 116, 70)

    this.startGameButton.setOnClickListener(function(view) {
      console.log('startGameButton click')
      if (that.visible) {
        if (that.restartCallback != null) {
          that.restartCallback()
        }
      }
    })

    this.contentLayout.addSprite(this.gameOverImg, Gravity.CENTER)
    this.contentLayout.addSprite(this.startGameButton, Gravity.CENTER)
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }

    this.frame.draw(ctx)
  }

  setOnRestartListener(callback) {
    this.restartCallback = callback
  }

}