// @author: wyndam
// @email: only.night@qq.com

/**
 * 精灵类，包含绘图以及碰撞检测等
 */
export default class Sprite {

  constructor(imgSrc, x, y, width, height) {
    // 当前对象的坐标以及尺寸
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    // 当前对象显示的图片
    this.img = new Image()
    this.img.src = imgSrc

    // 标识当前对象是否显示
    this.visible = true
  }

  /**
   * 将图片绘制到 canvas 上
   * {@param ctx cancas context 对象}
   */
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

  /**
   * 中心点检测
   * {@param target 目标物体}
   */
  isCollideWith(target) {
    if (!this.visible || !target.visible) {
      return false
    }

    let targetX = target.x + target.width / 2
    let targetY = target.y + target.height / 2

    return (targetX >= this.x &&
      targetX <= this.x + this.width &&
      targetY >= this.y &&
      targetY <= this.y + this.height)
  }

  /**
   * 严格边缘检测，会误判
   * {@param target 目标物体}
   */
  isCollideEdgeWith(target) {
    if (!this.visible || !target.visible) {
      return false
    }

    return ((target.x >= this.x &&
        target.x <= this.x + this.width &&
        target.y >= this.y &&
        target.y <= this.y + this.height) || // top left

      (target.x + target.width >= this.x &&
        target.x + target.width <= this.x + this.width &&
        target.y >= this.y &&
        target.y <= this.y + this.height) || // top right

      (target.x >= this.x &&
        target.x <= this.x + this.width &&
        target.y + target.height >= this.y &&
        target.y + target.height <= this.y + this.height) || // bottom left

      (target.x + target.width >= this.x &&
        target.x + target.width <= this.x + this.width &&
        target.y + target.height >= this.y &&
        target.y + target.height <= this.y + this.height)) // bottom right
  }

}