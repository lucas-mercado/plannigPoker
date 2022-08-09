const path = require('path')

//make part express
const express = require("express");
const app = express();

//make path dir
const path_static = path.join(__dirname, 'public');

//adding static
app.use(express.static(path_static));

//end-point
app.get('/',(req, res)=>res.send('Hello World'));

//setting socket.io
const httpServer = require("http").createServer(app);
const options = {};
const io = require("socket.io")(httpServer, options);
const port = 3000

io.on("connection", socket => console.log('connected!!!'));
io.on("")

//start server
httpServer.listen(port,()=>console.log('Start Server !!!'));