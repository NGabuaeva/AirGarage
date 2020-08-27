const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
  origin: 'http://localhost',
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
