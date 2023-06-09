require('dotenv').config();
const express = require('express');
const app = express();

const router = require('./app/router.js');

app.use(router);

app.listen(process.env.PORT, () =>
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);
