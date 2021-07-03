const express = require('express');
const { userRoute, generalRoute } = require('./api');

const app = express();

app.use(`/id`, generalRoute);
app.use(`/user`, userRoute);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
