const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002

const path = require('path');
//const router = express.Router();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/images'));
console.log(path);
console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})





// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

