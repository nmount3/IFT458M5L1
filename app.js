const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Apply logger middleware
app.use(loggerMiddleware);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Module 5 Lab 1!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});