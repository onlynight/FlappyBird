// @author: wyndam
// @email: only.night@qq.com

import Background from './runtime/background.js'
import Land from './runtime/land.js'
import Barrier from './runtime/barrier.js'
import Player from './player/player.js'

let ctx = canvas.getContext('2d')

export default class Main {

  constructor() {

    this.onCreate()

  }

  onCreate() {
    this.bg = new Background()
    this.land = new Land()
    this.barrier = new Barrier()
    this.barrier.init('images/pipe_down.png', 'images/pipe_up.png', window.innerWidth, px2dp(-80), px2dp(100))
    this.barrier.setSpeed(2)
    this.player = new Player('images/bird0_2.png', window.innerWidth / 2, window.innerHeight / 2 - 80)

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  loop() {

    this.update()
    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

  }

  render() {
    this.bg.drawToCanvas(ctx)
    this.barrier.drawToCanvas(ctx)
    this.land.drawToCanvas(ctx)
    this.player.drawToCanvas(ctx)
  }

  update() {
    this.bg.update()
    this.barrier.update()
    this.land.update()
  }

}