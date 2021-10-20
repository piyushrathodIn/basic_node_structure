const winston = require('winston');
const moment = require('moment');

const timestamp = () => moment().format('YYYY-MM-DD HH:mm:ss');
const myFormat = winston.format.printf(info => {
  return `${timestamp()} [${info.level}]: ${info.message}`;
});


//Logger
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.splat(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'app.log', prettyPrint: JSON.stringify})
    ]
  });
  

module.exports = logger;