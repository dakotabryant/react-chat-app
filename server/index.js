const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const socket = require('socket.io');
const {DATABASE_URL} = require('./config');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.Promise = global.Promise;



// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(databaseUrl = DATABASE_URL, port = 3001) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      }).on('error', err => { + mongoose.disconnect();
        reject(err);
      });
    });
  });
}

const io = socket(server);
const socketConnection = () => {
  io.on('connection', socket => {
    console.log('made socket connection');

    socket.on('chat', function(data) {
      io.sockets.emit('chat', data)
    });
    socket.on('typing', function(data) {
      socket.broadcast.emit('typing', data)
    })
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app,
  runServer,
  closeServer
};
