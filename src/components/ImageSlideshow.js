import React, { useState } from 'react';
import './ImageSlideshow.css';import ImageModal from './ImageModal';

const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="image-slideshow-container">
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className="slideshow-image clickable-image"
        onClick={() => openModal(currentImage)}
      />

      <p className="slideshow-caption">{currentImage.alt}</p>

      {images.length > 1 && (
        <div className="slideshow-controls">
          <button onClick={goToPreviousImage} className="slideshow-button">
            &#8249;
          </button>
          <div className="slideshow-indicator">
            {currentImageIndex + 1} / {images.length}
          </div>
          <button onClick={goToNextImage} className="slideshow-button">
            &#8250;
          </button>
        </div>
      )}

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageSlideshow;