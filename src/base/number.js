// @author: wyndam
// @email: only.night@qq.com

import Group from './group.js'

const NUMBER_IMG_PREFIX = 'images/font_0'
const NUMBER_START_INDEX = 48

const NUMBER_WIDTH = 24
const NUMBER_WIDTH1 = 16
const NUMBER_HEIGHT = 44

export default class Number extends Group {

  constructor(number) {
    super()

    this.number = number
    this.bits = []
    this.imgs = []

    this.__getBits(number)
  }

  setNumber(number) {
    this.number = number
    this.__getBits(this.number)
  }

  getNumber() {
    return this.number
  }

  __spliteBit(number) {
    if (number < 10) {
      this.bits.push(number)
      return
    }

    let bit = Math.floor(number / 10)
    let rest = number % 10

    if (bit >= 10) {
      this.bits.push(rest)
      this.__spliteBit(bit)
    } else {
      this.__spliteBit(rest)
      this.bits.push(bit)
    }
  }

  __getBits(number) {
    this.bits.length = 0
    // this.imgs.length = 0
    this.__spliteBit(this.number)
    this.bits.reverse()

    for (let i = 0; i < this.bits.length; i++) {
      let img = this.imgs[i]
      if (img == null) {
        img = new Image()
        this.imgs.push(img)
      }
      img.src = NUMBER_IMG_PREFIX + (NUMBER_START_INDEX + this.bits[i]) + '.png'
    }

    this.width = NUMBER_WIDTH * this.bits.length
    this.height = NUMBER_HEIGHT
  }

  draw(ctx) {
    if (!this.visible) {
      return
    }

    for (let i = 0; i < this.bits.length; i++) {
      let width = this.bits[i] === 1 ? NUMBER_WIDTH1 : NUMBER_WIDTH
      let x = this.bits[i] === 1 ? (NUMBER_WIDTH - NUMBER_WIDTH1) / 2 + NUMBER_WIDTH * i : NUMBER_WIDTH * i
      let y = this.bits[i] === 1 ? -1 : 0
      ctx.drawImage(
        this.imgs[i],
        this.x + x,
        this.y + y,
        width,
        NUMBER_HEIGHT
      )
    }
  }

  update() {}

}