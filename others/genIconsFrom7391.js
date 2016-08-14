const downloadImage = require('../utils/downloadImage')
const eachLimit = require('async/eachLimit')
const games = require('../dist/games.json')
const path = require('path')
// const _ = require('lodash')

const url = 'http://images.i7391.com/images/game/game_pic_#{id}.jpg'

eachLimit(games, 2, (item, done) => {
  const writeTargetPath = path.join(__dirname, `../dist/images/${item.BId}.jpg`)

  console.info(`[${new Date().toISOString()}] Start download icon ${writeTargetPath}`)
  downloadImage(url.replace(/#{id}/, item.BId), writeTargetPath, () => {
    console.info(`[${new Date().toISOString()}] Downloaded icon ${item.BId}`)
    done()
  })
})
