require('dotenv').config({ silent: true });
const crypto = require('crypto');
const logger = require('../../logger');

verifySignature = (req, res, next) => {

    next(); // Comment for enableing HTTPS protocol
    
    // logger.debug('Getting request from!'); // Uncomment for enableing HTTPS protocol
    // let signature = req.get('Signature').replace('sha256=', '');

    // const bodyCrypted = crypto
    //     .createHmac('sha256', process.env.API_SECRET)
    //     .update(req.rawBody, 'utf8', 'hex')
    //     .digest('base64')
       
    // if (bodyCrypted !== signature) { // UNCOMMENT
    //     logger.error('Authentication Failed!')
    //     res.status(401).send();
    //     return;
    // } else {
    //     logger.debug('Authentication Succeed!');
    //     next();
    // }
};

exports.verifySignature = verifySignature;
