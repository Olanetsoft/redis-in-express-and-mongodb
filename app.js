const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/Article');
require('./utils/redis');
require('dotenv').config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

require('./routes/articles')(app);

app.listen(port, () => console.log(`app is listening on port ${port}!`));