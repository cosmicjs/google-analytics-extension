// app-server.js
import express from 'express'
// import hogan from 'hogan-express'
import http_module from 'http'
import bodyParser from 'body-parser'
import compression from 'compression'
import session from 'express-session'
import cors from 'cors'
const app = express()
app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.json())
app.use(compression())
// app.engine('html', hogan)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + '/public'))
app.set('trust proxy', 1) // trust first proxy
app.use((req, res, next) => {
  if (req.url === '/favicon.ico')
    return res.end()
  // Set dev
  if (process.env.NODE_ENV === 'development')
    res.locals.is_dev = true
  else
    res.locals.is_dev = false
  next()
})

require('./routes')(app)
const http = http_module.Server(app)
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})