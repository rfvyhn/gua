const JM = require('json-mapper')
const games = require('./games.json')

const gameSchema = JM.makeConverter({
  id: 'BId',
  name: 'Text',
  url: 'Url',
  type: 'Type',
  Keyalpha: 'keyalpha',
})

module.exports = games.map(item => {
  item = gameSchema(item)
  item.iconUrl = `/dist/images/${item.id}.jpg`
  return item
})
