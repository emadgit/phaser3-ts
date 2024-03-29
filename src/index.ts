import Phaser from 'phaser'
import config from './config'
import GameScene from './scense/game'

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene],
  }),
)
