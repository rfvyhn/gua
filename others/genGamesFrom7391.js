const fetch = require('node-fetch')
const fs = require('fs-extra')
const path = require('path')

fetch('http://api.json.i7391.com/Api.GetTopSearchDataItem.axd?&callback=allgames&METCH=ALLGAMEANDCARD')
.then(res => res.text())
.then(text => text.replace(/allgames\((.*?)\)/img, '$1'))
.then(arrayString => {
  fs.writeFileSync(
    path.join(__dirname, '../dist/games.json'), arrayString
  )
})
