'use strict';

module.exports = {
    port: parseInt(process.env.PORT, 10) || 8001,
    url: 'mongodb://localhost:27017/nicomama',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000
        }
    },
    db_config: {
        protocol: 'mysql',
        host: '127.0.0.1',
        database: 'nicomama',
        user: 'root',
        password: '123456',
        port: 3306
    }
}