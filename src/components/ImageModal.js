import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={src} alt={alt} className="modal-image" />
        {alt && <p className="modal-caption">{alt}</p>}
      </div>
    </div>
  );
};

export default ImageModal;