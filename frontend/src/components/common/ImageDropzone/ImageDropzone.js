import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const ImageDropzone = (props) => {
  const { value, onChange, setFieldTouched, setFieldValue } = props;
  const [selectedImage, setSelectedImage] = useState(value);

  const handleImageDrop = (acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  };

  console.log(selectedImage.name);
  const handleImageUpload = () => {
    // try {
    //   const formData = new FormData();
    //   formData.append('image', selectedImage);
    //   // await axios.post('/upload', formData, {
    //   //   headers: {
    //   //     'Content-Type': 'multipart/form-data',
    //   //   },
    //   // });
    //   // Image uploaded successfully
    //   alert('Image uploaded successfully');
    // } catch (error) {
    //   console.error('Image upload failed:', error);
    //   // Handle error
    // }
    onChange(selectedImage.name);
    setFieldTouched(selectedImage.name);
    setFieldValue(selectedImage.name);
  };
  return (
    <>
      {' '}
      <Dropzone onDrop={handleImageDrop} accept='image/*' multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop an image here, or click to select an image</p>
          </div>
        )}
      </Dropzone>
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} alt='Selected' />
          <button onClick={handleImageUpload}>Upload Image</button>
        </div>
      )}
      {/* <input
        type='file'
        onChange={handleImageUpload}
        value={value}
        accept='.png'
      /> */}
    </>
  );
};

export default ImageDropzone;
