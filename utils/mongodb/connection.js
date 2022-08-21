const mongoose = require('mongoose');
const mongoUri = require('../../config/appConfig.json').mongodbUri;
const mongoConnect = () => {
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected', function () { console.log('connected to mongodb') });
    mongoose.connection.on('error', (err) => {
        console.log('Error:', err)
    });
}

module.exports = { mongoConnect }