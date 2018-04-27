// home.js
import async from 'async'
var path = require('path');
module.exports = (app) => {
  app.get('/getDashboard', async (req, res) => {
      return res.sendFile(path.resolve('views/index.html'))
  })
}