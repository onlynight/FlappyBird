// @author: wyndam
// @email: only.night@qq.com

import Button from '../base/button.js'
import Group from '../base/group.js'
import Sprite from '../base/sprite.js'

export default class StartGameWindow extends Group {

  constructor() {
    super()
    this.startCallback = null

    this.startButton = new Button('images/button_play.png',
      window.innerWidth / 2 - 116 / 2, window.innerHeight / 2, 116, 70)
    this.logo = new Sprite('images/title.png', window.innerWidth / 2 - 178 / 2, window.innerHeight / 3 - 10, 178, 48)

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
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }

    this.startButton.draw(ctx)
    this.logo.draw(ctx)
  }

  setOnStartListener(callback) {
    this.startCallback = callback
  }

}