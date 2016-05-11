var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/dist'));
app.listen(1337);

console.log('Listening on port 1337...');