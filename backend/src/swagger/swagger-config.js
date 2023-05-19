const schemas = require('./schemas/Schemas');

module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Practitioner Profile Management System',
      version: '1.0.0',
    },
    servers: [
      {
        // url: process.env.API_BASE_URL,
        url: 'http://localhost:5000',
      },
    ],
    basePath: '/',
    components: {
      schemas,
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/api/routes/*.js'], // path containing codes for swagger doc.
  //   apis: ["./routes/**/*.js", "./models/**/*.js", "./routes/**/**/*.js", "./models/**/**/*.js"],
};
