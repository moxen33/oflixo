import React, { useState, useRef, useEffect } from 'react';

const ImageUpload = ({ uploadImageName, isUploadImageDefault, isRequiredStar, defaultImageUrl }) => {
  // Initialize state with the default image URL if it's provided
  const [imagePreview, setImagePreview] = useState(defaultImageUrl || null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const fileInputRef = useRef(null);
  const removeButtonRef = useRef(null);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImagePreview(e.target.result); // Set the image preview source
        setIsImageSelected(true); // Image is selected
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle remove button click
  const handleRemoveImage = () => {
    setImagePreview(null); // Remove the image preview
    setIsImageSelected(false); // Reset image selected state
    fileInputRef.current.value = null; // Reset the file input value
  };

  // Function to handle removing the default image
  const handleRemoveDefaultImage = () => {
    setImagePreview(null); // Remove the default image
    setIsImageSelected(false); // Reset image selected state
    fileInputRef.current.value = null; // Reset the file input value
  };

  useEffect(() => {
    // If there's an image preview and remove button, manage the button visibility
    if (removeButtonRef.current) {
      if (isImageSelected || imagePreview) {
        removeButtonRef.current.style.display = 'block';
      } else {
        removeButtonRef.current.style.display = 'none';
      }
    }
  }, [isImageSelected, imagePreview]);

  return (
    <div id="tvshow_genre_thumbnail_id_field" className="form-field form-group position-relative media-attachment-video media-option tvshow_genre_thumbnail_id_field tvshow_genre_thumbnail_container">
      <label className="form-label">{uploadImageName}</label>
      {isRequiredStar && <span className="text-danger">{" "}*</span>}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="d-none"
        accept="image/*"
        onChange={handleFileSelect}
      />

      {/* Button to trigger file input */}
      <div>
        <a
          href="#"
          id="streamit_upload_tvshow_genre_thumbnail"
          className="d-flex align-items-center flex-column justify-content-center gap-4 button streamit_upload_video_button tips"
          onClick={() => fileInputRef.current.click()}
        >
          {/* Image preview if selected */}
          {imagePreview ? (
            <img
              id="tvshow_genre_thumbnail_preview"
              src={imagePreview}
              alt="Image Preview"
              className="img-fluid object-cover"
              style={{
                width: '200px',
                height: '200px',
              }}
            />
          ) : (
            // Default icon and text before image is selected
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="img-icon d-block">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="d-block">Choose Media to Upload</span>
            </>
          )}
        </a>
      </div>

      <div className="streamit_media_preview-wrap">
        <div className="streamit_media_preview">
          {/* Remove button (initially hidden) */}
          {(isImageSelected || imagePreview) && (
            <button
              id="remove_tvshow_genre_thumbnail_button"
              ref={removeButtonRef}
              className="button streamit_remove_video_button tips position-absolute"
              onClick={handleRemoveImage}
            >
              <span className="remove-media-icon">X</span>
            </button>
          )}

          {/* Option to remove default image if no image has been uploaded */}
          {imagePreview && !isImageSelected && !defaultImageUrl && (
            <button
              id="remove_default_image_button"
              className="button streamit_remove_video_button tips position-absolute"
              onClick={handleRemoveDefaultImage}
            >
              <span className="remove-media-icon">Remove Default Image</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

//  <div id={`source${source.id}`} className="form-container">
//                 {/* Example form content */}
//                 <div
//                   id="source-data-container"
//                   className="streamit_source_data streamit-metabox-content pt-3 mt-3 pb-3 d-none"
//                 >
//                   <Row>
//                     <Col lg={6}>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Name
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="name"
//                           placeholder="Enter the source name of the movie."
//                         />
//                       </Form.Group>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Quality
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="quality"
//                           placeholder="Enter the source quality of the movie."
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col lg={6}>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Choose Method
//                         </Form.Label>
//                         {/* <select className="form-control" name="Choose Method">
//                           <option>Embed Movie</option>
//                           <option>Movie URL</option>
//                         </select> */}
//                       </Form.Group>
//                       <Form.Group className="form-group">
//                         <Form.Label
//                           className="form-label flex-grow-1"
//                           htmlFor="Description1"
//                         >
//                           Embed Movie
//                         </Form.Label>
//                         <Form.Control
//                         as="textarea"
//                           id="Description1"
//                           className="form-control"
//                           rows="7"
//                           placeholder="Enter the embed content to the movie."
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col lg={6}>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Language
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="Language"
//                           placeholder="Enter the source name of the movie."
//                         />
//                       </Form.Group>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Date Added
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="Date Added"
//                           placeholder="Enter the source quality of the movie."
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col lg={6}>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Player
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="Player"
//                           placeholder="Enter the source quality of the movie."
//                         />
//                       </Form.Group>
//                       <Form.Group className="form-group">
//                         <Form.Label className="form-label flex-grow-1" htmlFor="genres">
//                           Download URL
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           className="form-control"
//                           name="Download URL"
//                           placeholder="Enter the source quality of the movie."
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </div>
//               </div> 