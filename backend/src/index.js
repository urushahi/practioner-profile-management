const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./api/routes/Users');
const practitionerRouter = require('./api/routes/Practitioner');

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('server has started on port 5000');
});

app.use('/users', userRouter);
app.use('/practitioners', practitionerRouter);
