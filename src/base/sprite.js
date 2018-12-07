export default class Sprite {

  constructor(imgSrc, x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.img = new Image()
    this.img.src = imgSrc

    this.visible = true
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return
    }

    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

}