const { errorResponse } = require('../helpers/apiResponse');
const cloudinaryService = require('../services/CloudinaryService');
const multer = require('multer');

const uploadImageMiddleware = (req, res, next) => {
  try {
    cloudinaryService.upload.single('image')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer error occurred
        return res.status(400).json(errorResponse(err.message, 400));
      } else if (err) {
        // Other error occurred
        throw new Error(err);
      }

      if (!req.file) {
        req.fileURL = '';
        return next();
      }

      // File uploaded successfully
      const file = req.file;
      // Retrieve the file URL from Cloudinary
      const fileURL = file.path;
      // Perform any additional processing or store the file details as needed

      req.fileURL = fileURL; // Attach the fileURL to the request object
      next();
    });
  } catch (err) {
    return res
      .status(500)
      .json(errorResponse('An error occurred during file upload.', 500));
    // throw err;
  }
};

module.exports = uploadImageMiddleware;
