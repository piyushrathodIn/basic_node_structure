const fs = require('fs');

var privateKey  = fs.readFileSync('../../../OpenSSL/certificate.key', 'utf8');
var certificate = fs.readFileSync('../../../OpenSSL/certificate.crt', 'utf8');
var bundle = fs.readFileSync('../../../OpenSSL/cabundle.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate, ca: bundle};

module.exports = credentials;