/* 
const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { };
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => {});

httpServer.listen(3000);


app.use('/pthite');



 io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {

    console.log("We have a new client: " + socket.id);

    socket.on('disconnect', function () {
      console.log("Client has disconnected");
    });
  });

  io.on("connection", socket => {
    // either with send()
    socket.send("Hello!");

  });
*/
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const cors = require('cors');
const http = require('http');


var app = express();
const server = http.createServer(app);

app.use(cors());

app.use(express.static('public'));

/* const serv = app.listen(PORT, () => {
  console.log(`${PORT}`)
}); */

const io = socketIO(server, {
  cors: {
    origin: ["http://secure-shelf-39110.herokuapp.com/", "http://kazej.net/c.html"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

server.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});

io.on("connection", socket => { console.log(`connected ${socket.id}`) });

/* httpServer.listen(3000);

app.use(express.static('public')) */