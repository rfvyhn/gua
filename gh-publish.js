const ghpages = require('gh-pages')

console.log('publish starting...')

ghpages.publish('dist', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('publish done')
})
