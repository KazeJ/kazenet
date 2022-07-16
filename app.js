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

var app = express()
.use(express.static('public'))
.listen(PORT, () => console.log(`Listening on ${JSON.stringify(app)}`));

const io = socketIO(app);

io.on("connection", socket => { console.log(socket.id) });

/* httpServer.listen(3000);

app.use(express.static('public')) */