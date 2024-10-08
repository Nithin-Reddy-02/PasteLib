const mongoose = require('mongoose');
const config = require('config');

require('dotenv').config();

// Get password from env and replace within mongoURI
db = config.get('mongoURI').replace('<password>', process.env.MONGODB_PASSWORD);

const connectDB = async () => {
    try {
        await mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('MongoDB connected');
    } catch (err) {
        console.error('DB error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
