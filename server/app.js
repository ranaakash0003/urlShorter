const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const urlRoute = require('./api/url')

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

// app.get('/', (req, res) => {
//     res.status(200).send({ message: 'Welcome to urrrrrrlshortner.' });
// });

 app.use('/', urlRoute)
// app.use('/api/v1', authRoute)
// app.use(errorHandler);

module.exports = app;