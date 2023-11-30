const express = require('express');
const app = express();
const dotenv = require('dotenv');



dotenv.config();
const port = process.env.PORT || 3000;


const subjectsAlertController = require('./engine/subject-alert/controller');
const approvalReceiverController = require('./engine/approval-receiver/controller');
const permitsSubjectController = require('./engine/permits-subjects/controller');

app.use(express.json());

app.use('/api/subject-alert', subjectsAlertController);
app.use('/api/approval-receiver', approvalReceiverController);
app.use('/api/permits-subjects', permitsSubjectController);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
