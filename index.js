/* ---------- DotEnv ---------- */
const dotenv = require('dotenv');
dotenv.config();

/* ---------- Express ---------- */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 3000;

/* ---------- Middlewares ---------- */
app.use(bodyParser.json());
app.use(router);

/* ---------- App ---------- */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});