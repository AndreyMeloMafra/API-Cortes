const express = require('express');
const routes = require('./routes/index');
// const { Client } = require('pg');

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
// })

// client.connect();

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);