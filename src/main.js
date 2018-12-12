// @author: wyndam
// @email: only.night@qq.com

import Background from './runtime/background.js'
import Land from './runtime/land.js'
import BarrierManager from './runtime/barrier-manager.js'
import Player from './player/player.js'
import StartGameWindow from './window/startGame.js'

let ctx = canvas.getContext('2d')

export default class Main {

  constructor() {

    this.onCreate()

  }

  onCreate() {
    this.bg = new Background()
    this.land = new Land()
    this.player = new Player('images/bird.png', window.innerWidth / 3, window.innerHeight / 2 - 25)
    this.player.visible = false

    this.barrierManager = new BarrierManager()
    this.startGameWindow = new StartGameWindow()

    let that = this
    this.startGameWindow.setOnStartListener(function() {
      that.player.visible = true
    })

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniId);
    databus.running = false

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  loop() {

    if (databus.running) {
      databus.frame++;

      this.update()
    }


    this.render()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

  }

  render() {
    this.bg.drawToCanvas(ctx)
    this.barrierManager.drawToCanvas(ctx)
    this.land.drawToCanvas(ctx)
    this.player.drawToCanvas(ctx)
    this.startGameWindow.drawToCanvas(ctx)
  }

  update() {
    this.bg.update()
    this.land.update()
    this.barrierManager.update()
    this.barrierManager.generateBarriers(databus.frame)
    this.player.update()

    // collide with land
    if (this.land.isCollideEdgeWith(this.player)) {
      databus.running = false
    }

    // collide with barriers
    for (let i = 0; i < databus.barriers.length; i++) {
      if (databus.barriers[i].isCollideEdgeWith(this.player)) {
        databus.running = false
        break
      }
    }
  }

}