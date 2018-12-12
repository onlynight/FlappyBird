// @author: wyndam
// @email: only.night@qq.com

import Background from './runtime/background.js'
import Land from './runtime/land.js'
import BarrierManager from './runtime/barrier-manager.js'
import Player from './player/player.js'

let ctx = canvas.getContext('2d')

export default class Main {

  constructor() {

    this.onCreate()

  }

  onCreate() {
    this.bg = new Background()
    this.land = new Land()
    this.player = new Player('images/bird0_2.png', window.innerWidth / 2, window.innerHeight / 2 - 80)
    this.barrierManager = new BarrierManager()

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  loop() {
    if (databus.running) {
      databus.frame++;

      this.update()
      this.render()

      this.aniId = window.requestAnimationFrame(
        this.bindLoop,
        canvas
      )
    }

  }

  render() {
    this.bg.drawToCanvas(ctx)
    this.barrierManager.drawToCanvas(ctx)
    this.land.drawToCanvas(ctx)
    this.player.drawToCanvas(ctx)
  }

  update() {
    this.bg.update()
    this.land.update()
    this.barrierManager.update()
    this.barrierManager.generateBarriers(databus.frame)
    this.player.update()

    if (this.land.isCollideEdgeWith(this.player)) {
      databus.running = false
    }
  }

}