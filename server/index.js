const fs = require("fs");
const util = require('util');
const http = require('http');
const path = require('path');
const host = "localhost";
const port = 8080;
const express = require("express");
const cors = require('cors');
const readFile = util.promisify(fs.readFile);
const app = express();
const server = http.createServer(app);
app.use(cors())


app.get('/pizza', function (
    request,
    response
){
    const filePath = path.join(__dirname, 'pizzas.json');
    readFile(filePath).then( (data) =>{
        response.status(200);
        response.setHeader('Content-Type', 'application/json');
        response.json(JSON.parse(data.toString()))
    } )
})

app.post('/order', function (
    request,
    response
){
    const filePath = path.join(__dirname, 'order.json');
    readFile(filePath).then( (data) =>{
        response.status(200);
        response.setHeader('Content-Type', 'application/json');
        response.json(JSON.parse(data.toString()))
    } )
})

server.listen(port,host);
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
