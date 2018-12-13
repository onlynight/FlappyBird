// @author: wyndam
// @email: only.night@qq.com

import Background from './runtime/background.js'
import Land from './runtime/land.js'
import BarrierManager from './runtime/barrier-manager.js'
import Player from './player/player.js'
import StartGameWindow from './window/startGame.js'
import GameOverWindow from './window/gameOver.js'

import Number from './base/number.js'
import FrameLayout from './base/frameLayout.js'

let ctx = canvas.getContext('2d')

export default class Main {

  constructor() {

    this.onCreate()

  }

  onCreate() {
    let that = this

    this.bg = new Background()
    this.land = new Land()
    this.player = new Player('images/bird.png', window.innerWidth / 3, window.innerHeight / 2 - 25)
    this.player.visible = false

    this.barrierManager = new BarrierManager()
    this.startGameWindow = new StartGameWindow()
    this.gameOverWindow = new GameOverWindow()
    this.gameOverWindow.setOnRestartListener(function() {
      that.player = new Player('images/bird.png', window.innerWidth / 3, window.innerHeight / 2 - 25)
      databus.barriers.length = 0
      that.gameStart()
      that.gameOverWindow.visible = false
      that.score.setNumber(0)
    })
    this.gameOverWindow.visible = false

    this.score = new Number(0);
    this.scoreFrame = new FrameLayout(0, 0, window.innerWidth, window.innerHeight / 3)
    this.scoreFrame.setSprite(this.score)
    this.scoreFrame.setGravity(Gravity.CENTER)
    this.scoreFrame.visible = false

    this.startGameWindow.setOnStartListener(function() {
      that.player.visible = true
      that.scoreFrame.visible = true
    })

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniId);
    databus.running = false

    window.requestAnimationFrame(
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
    window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

  }

  render() {
    this.bg.draw(ctx)
    this.barrierManager.draw(ctx)
    this.land.draw(ctx)
    this.player.draw(ctx)
    this.startGameWindow.draw(ctx)

    this.scoreFrame.draw(ctx)
    this.gameOverWindow.draw(ctx)

    if (databus.gameOver) {
      this.gameOverWindow.visible = true
    }
  }

  update() {
    this.bg.update()
    this.land.update()
    this.barrierManager.update()
    this.barrierManager.generateBarriers(databus.frame)
    this.player.update()

    // collide with land
    if (this.land.isCollideEdgeWith(this.player)) {
      this.gameOver()
      console.log(this.player)
      console.log('land gameover')
    }

    // collide with barriers
    for (let i = 0; i < databus.barriers.length; i++) {
      if (databus.barriers[i].isCollideEdgeWith(this.player)) {
        this.gameOver()
        console.log('barriers gameover')
        break
      }
    }

    // score
    for (let i = 0; i < databus.barriers.length; i++) {
      if (databus.barriers[i].isPassed(this.player)) {
        this.score.number++
          console.log(this.score.number)
        this.score.setNumber(this.score.number)
      }
    }
  }

  gameOver() {
    databus.running = false
    databus.gameOver = true
  }

  gameStart(){
    databus.running = true
    databus.gameOver = false
  }

}