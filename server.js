require('dotenv').config({path: "./config.env"});
const errorHandler = require('./middleware/error');
const express = require('express');
const connectDB = require("./config/db");



//connect DB
connectDB();
// connect();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`logged Error: ${err}`);
    server.close(() => process.exit(1));
});