const express = require('express');
const app = express();
const cors = require('cors');

//swagger setup
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swagger-config');
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//end of swagger setup

const userRouter = require('./api/routes/Users');
const practitionerRouter = require('./api/routes/Practitioner');
const allergyRoutes = require('./api/routes/Allergy');

const authenticateToken = require('./api/middlewares/authenticate');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log('server has started on port 5000');
});

app.use('/users', userRouter);
app.use('/practitioners', authenticateToken, practitionerRouter);
app.use('/allergies', authenticateToken, allergyRoutes);
