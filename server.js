//Install express server
const express = require('express');
const http = require('http')
const path = require('path');
const cors = require('cors');

const app = express();

//app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/NewLook-T')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/NewLook-T/index.html'));
});

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));