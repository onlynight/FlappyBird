// @author: wyndam
// @email: only.night@qq.com

import Button from '../base/button.js'
import Sprite from '../base/sprite.js'

export default class StartGameWindow extends Sprite {

  constructor() {
    super('', 0, 0, 0, 0)
    this.startCallback = null

    this.startButton = new Button('images/button_play.png',
      window.innerWidth / 2 - 116 / 2, window.innerHeight / 2, 116, 70)
    this.logo = new Sprite('images/title.png', window.innerWidth / 2 - 178 / 2, window.innerHeight / 3 - 10, 178, 48)

    let that = this
    this.startButton.setOnClickListener(function(view) {
      if (that.startCallback != null) {
        that.startCallback()
      }

      that.visible = false
      databus.running = true
    })
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return
    }

    this.startButton.drawToCanvas(ctx)
    this.logo.drawToCanvas(ctx)
  }

  setOnStartListener(callback) {
    this.startCallback = callback
    console.log('sadfsdfasdf')
    console.log(this.startCallback === null)
  }

}