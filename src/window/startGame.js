// @author: wyndam
// @email: only.night@qq.com

import Button from '../base/button.js'
import Group from '../base/group.js'
import Sprite from '../base/sprite.js'
import LinearLayout from '../base/linearLayout.js'
import FrameLayout from '../base/frameLayout.js'

export default class StartGameWindow extends Group {

  constructor() {
    super()
    this.startCallback = null

    this.startButton = new Button('images/button_play.png', 0, 0, 116, 70)
    this.logo = new Sprite('images/title.png', 0, 0, 178, 48)

    let that = this
    this.startButton.setOnClickListener(function(view) {
      if (that.visible) {
        if (that.startCallback != null) {
          that.startCallback()
        }

        that.visible = false
        databus.running = true
      }
    })

    this.contentLayout = new LinearLayout(0, 0, window.innerWidth, window.innerHeight)
    this.frame = new FrameLayout(0, 0, window.innerWidth, window.innerHeight)
    this.frame.setGravity(Gravity.CENTER)
    this.contentLayout.addSprite(this.logo, Gravity.CENTER)
    this.contentLayout.addSprite(this.startButton, Gravity.CENTER)
    this.frame.setSprite(this.contentLayout)
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }

    // this.startButton.draw(ctx)
    // this.logo.draw(ctx)
    this.frame.draw(ctx)
  }

  setOnStartListener(callback) {
    this.startCallback = callback
  }

}