import React from 'react';

export default function Offcanvas({
  title = "Default Title",      // Default title
  content = "Default Content",  // Default content
  id = "offcanvasDefault",      // Default ID
  ariaLabel = "Offcanvas Area", // Default ARIA label
  className = "",               // Additional classes if any
  onClose,                      // Optional onClose callback
}) {
  return (
    <div
      className={`offcanvas offcanvas-start${className}`}
      data-bs-scroll="true"
      tabIndex="-1"
      id={id}
      aria-labelledby={ariaLabel}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={ariaLabel}>
          {title}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        {content}
      </div>
    </div>
  );
}
