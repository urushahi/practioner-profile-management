const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// Create a storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Optional folder for the uploaded images
    // format: async (req, file) => 'jpg', // Optional image format
    public_id: (req, file) => Date.now(), // Optional public ID for the uploaded image
  },
});

// Create the Multer middleware
const upload = multer({ storage: storage });

module.exports = {
  upload,
};
