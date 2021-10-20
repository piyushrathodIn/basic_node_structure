"use strict";

const express = require("express");
const bodyParser = require('body-parser');
// const http = require('https');
const http = require('http');
require('dotenv').config({ silent: true });

const authMiddleWare = require('./app/middleware/auth');
const externalApiController = require('./app/controller/external_api_controller');


let app = express();

app.set('port', process.env.PORT || 3003)

app.use(bodyParser.json({
    verify: (req, res, buf) => {
        req.rawBody = buf;
    }
}));

// const httpsServer = http.createServer(require('./ssl_credentials'), app);
const httpsServer = http.createServer(app);
const port = app.get('port');
httpsServer.listen(port);
httpsServer.on('listening', () =>  console.log(`Node basic structure is listening on port ${port}!`));

app.get('/sf_get', authMiddleWare.verifySignature, externalApiController.callGetApi);


