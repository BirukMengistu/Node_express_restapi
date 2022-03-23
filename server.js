

const app = require('./app');
const mongoose = require('mongoose');
const colors =  require('colors')
require('dotenv').config();

const PORT = process.env.PORT || 3999;

const serverURI = 'http://localhost:' + PORT; 
const mongoURI = process.env.MONGODB_URL;

app.listen(PORT, () =>  console.log('Server: ' + serverURI.yellow.underline )).on('error', (e) => {
    console.log('Error happened: '.red.underline, e.message);
 });

if(!mongoURI) {
  console.log('no environment variable found.')
} else {
  mongoose.connect(mongoURI, () => console.log('Connected to DB'.blue.underline))
}
