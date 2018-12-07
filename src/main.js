import Background from './runtime/background.js'

let ctx = canvas.getContext('2d')

export default class Main {

  constructor() {

    this.onCreate()
    
  }

  onCreate(){
    this.bg = new Background()

    this.bindLoop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  loop(){

    this.update()
    this.render()
    
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )

  }

  render(){
    this.bg.drawToCanvas(ctx)
  }

  update(){
    this.bg.update()
  }

}