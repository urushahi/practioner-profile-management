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

const cloudinary = require('cloudinary').v2;
const multerUpload = require('./api/middlewares/multer');

app.post('/upload', multerUpload, async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      {
        folder: 'test', // Optional: specify a folder in Cloudinary
        public_id: originalname, // Optional: use the original filename as the public ID
      },
      async (error, result) => {
        if (error) {
          console.log('Upload to Cloudinary failed:', error);
          throw error;
        }

        // Save image details to the database
        const image = await prisma.image.create({
          data: {
            filename: originalname,
            url: result.secure_url,
          },
        });

        res.status(200).json(image);
      }
    );

    result.end(buffer);
  } catch (error) {
    console.error('Image upload failed:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});

app.use('/users', userRouter);
app.use('/practitioners', authenticateToken, practitionerRouter);
app.use('/allergies', authenticateToken, allergyRoutes);
