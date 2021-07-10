const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({optionsSuccessStatus: 200}))

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


// your first API endpoint... 
app.get("/api/hello", (request, response) => {
  response.json({greeting: 'hello API'})
})

app.get("/api/whoami", (request, response) => {
  const ip = request.ip
  const language = request.get('Accept-Language')
  const software = request.get('User-Agent')
  response.json({
    ip,
    language,
    software
  })
})

// listen for requests :)
var listener = app.listen(3005, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});