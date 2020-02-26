console.log("inside server.js file");
//Install express server
const express = require('express');
const path = require('path');

const app = express();



// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/e-comm'));

console.log("app root path: ", __dirname);

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + './dist/e-comm/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log("Server started" );
})