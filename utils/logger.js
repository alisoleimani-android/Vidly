const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

const logger = winston.createLogger({
    format: winston.format.json(),

    transports: [
        new winston.transports.File({
            filename: './logs/pipline.log',
            level: 'error'
        }),

        new winston.transports.MongoDB({
            db: 'mongodb://localhost/vidly',
            level: 'error'
        }),

        new winston.transports.Console({
            level: 'info'
        })
    ],

    exceptionHandlers: [
        new winston.transports.File({
            filename: './logs/exceptions.log'
        }),
        new winston.transports.Console()
    ],

    rejectionHandlers: [
        new winston.transports.File({
            filename: './logs/rejections.log'
        }),
        new winston.transports.Console()
    ]
});

module.exports = logger;