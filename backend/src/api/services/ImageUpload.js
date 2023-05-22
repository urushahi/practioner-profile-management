// Upload image to Cloudinary
const imageUpload = async (originalname) => {
  await cloudinary.uploader.upload_stream(
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
};

module.exports = imageUpload;
