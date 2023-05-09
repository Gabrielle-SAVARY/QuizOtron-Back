/* ---------- DotEnv ---------- */
const dotenv = require('dotenv');
dotenv.config();

/* ---------- Express ---------- */
const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;
const app = express();

/* ---------- Middlewares ---------- */
app.use(router);

/* ---------- App ---------- */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});