// filepath: /c:/Users/ASUS/mathaji/Scatch/config/mongoose-connection.js
require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');

const dbURI = process.env.MONGODB_URI || config.get('MONGODB_URI');

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
