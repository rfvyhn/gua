const _ = require('lodash')
const eachLimit = require('async/eachLimit')
const fs = require('fs-extra')
const path = require('path')
const pug = require('pug')
const games = require('../dist/games')

let compiledCount = 0

// eachLimit(_.slice(games, 0, 10), 10, (item, done) => {
eachLimit(games, 10, (item, done) => {
  console.log(`${compiledCount}/${games.length} [${new Date().toISOString()}] generating... #${item.id} ${item.name}...`)
  compiledCount++
  const hotGames = _.shuffle(games).slice(0, 6)
  const generator = pug.compileFile(path.join(__dirname, '../src/game/game.pug'))
  const html = generator({
    game: item,
    hotGames,
  })

  if (!item.id) {
    return
  }

  fs.writeFile(
    path.join(__dirname, `../dist/web/${item.id}.html`), html,
    (err) => {
      if (err) {
        console.log(err)
        throw err
      }
      done()
    }
  )
})
