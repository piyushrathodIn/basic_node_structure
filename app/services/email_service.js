const nodemailer = require('nodemailer');
const logger = require('../../logger');
require('dotenv').config({ silent: true });

sendEmail = async (emailInfo, attachment) => {
    try {
        const auth = {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_AUTH_USERNAME,
                pass: process.env.EMAIL_AUTH_PASSWORD,
            }
        }
        const transporter = nodemailer.createTransport(auth);
        transporter.sendMail({
            from: process.env.EMAIL_SENDER_ADDRESS,
            to: emailInfo.emailTo,
            replyTo: '',
            subject: emailInfo.subject,
            text: emailInfo.body,
            attachments: [{
                filename: attachment.filename,
                content: attachment.data,
                encoding: 'base64'
            }]
        }).then(async (info) => {
            logger.debug('Email has been sent...');
            logger.debug(JSON.stringify(info));
            return true;
        }).catch((error) => {
            logger.error(error);
        });
    } catch (error) {
        logger.error(error);
    }
}

exports.sendEmail = sendEmail;