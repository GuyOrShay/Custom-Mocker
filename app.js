const express = require('express');
const app = express();
const dotenv = require('dotenv');



dotenv.config();
const port = process.env.PORT || 3000;


const exampleController = require('./src/subject-alert/controller');

app.use(express.json());

// API prefix
app.use('/api/subject-alert', exampleController);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
