const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected...');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });
