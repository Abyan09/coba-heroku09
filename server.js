//Install express server
const express = require('express');
const path = require('path');

const app = express();

// serve only the static files from the angularapp directory
app.use(express.static(__dirname + '/coba-heroku09-app'));

app.get('/*', function(req, res) {
  
res.sendFile(path.join(__dirname + '/coba-heroku09-app/index.html'));
});

app.listen(process.env.PORT || 8080);