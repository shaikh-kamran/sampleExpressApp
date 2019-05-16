var config = {
    development: {
        //url to be used in link generation
        url: 'mongodb://',
        //mongodb connection settings
        database: {
            host:   'localhost',
            port:   '27017',
            db:     'testDb'
        },
        //server details
        server: {
            host: 'localhost',
            port: '5000'
        }
    },
    production: {
        //url to be used in link generation
        url: 'mongodb://',
        //mongodb connection settings
        database: {
            host: '127.0.0.1',
            port: '27017',
            db:    'testDb'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3421'
        }
    }
    };
    module.exports = config;