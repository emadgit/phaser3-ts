import Phaser from 'phaser'

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
    // Load images or sounds
    this.load.image('MyPic', 'src/assets/logo.png')
  }

  // Create game objects
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

  // Update game state amd constant running loop
  // When we want check something over and over again, like player input or collision detection
  update() {}
}
