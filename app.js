const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5200
const SERVER = process.env.SERVER || "http://localhost"

const app = express();
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { mongoConnect } = require('./utils/mongodb/connection');
mongoConnect();
 



app.use('/', require('./routes'));


app.listen(PORT, () => {
    console.log(`Application is runnuing at ${SERVER}:${PORT}`);
})