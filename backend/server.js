const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const app = express();

//Connect DB
connectDB();
app.use(cors());
// Init middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/d', require('./routes/api/dumps'));
app.use('/api/short',require('./routes/api/short'));


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
//	res.send("Hi There");
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//app.get('/api/hello/',function(req,res){
//res.send
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
