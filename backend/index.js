const express = require('express');
const dotenv = require("dotenv").config();
const routes = require("./routes/mainRoutes.js")
const app = express();
const port = process.env.PORT || 5000;

app.use('/api/',routes)

app.listen(port, () => { console.log("App is listening on port " + port) }); 