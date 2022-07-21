const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

var app = express();
app.use(cors());
app.use(express.static(`${__dirname}/public`))

app.get('/', function (req, res) {
    console.log(req.get('Content-Type')); 
    res.send('Yellow');
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});