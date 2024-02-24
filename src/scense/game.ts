import Phaser from 'phaser'

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
    this.load.image('MyPic', 'src/assets/logo.png')
  }

  create() {
    const logo = this.add.image(window.innerWidth / 2, window.innerHeight, 'MyPic')

    this.tweens.add({
      targets: logo,
      y: window.innerHeight - 200,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }
}
