exports.DATABASE_URL = process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        (process.env.NODE_ENV === 'production' ?
                             'mongodb://localhost/surpayapp': 'mongodb://localhost/surpayapp-dev');
 exports.PORT = process.env.PORT || 8181;
