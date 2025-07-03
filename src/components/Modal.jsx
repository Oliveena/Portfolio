import React, { useEffect, useRef } from "react";

export default function Modal({
  formData,
  setFormData,
  errors,
  loading,
  success,
  onClose,
  onSubmit,
  downloadLink,
}) {
  const modalRef = useRef(null);

  const fileType = downloadLink?.endsWith(".pdf")
    ? "PDF"
    : downloadLink?.endsWith(".docx")
    ? "Word"
    : "";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={handleClickOutside}>
      <div className="modal-container" ref={modalRef}>
        <h2>Please enter your credentials to download {fileType}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
        >
          <div className="form-group">
            <label>Name or Company Name</label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={formData.userEmail}
              onChange={(e) =>
                setFormData({ ...formData, userEmail: e.target.value })
              }
              required
            />
          </div>

          {errors.length > 0 && (
            <ul className="error-list">
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          )}

          {loading && (
            <p className="status-message loading">Submitting...</p>
          )}
          {success && (
            <p className="status-message success">
              Success! Your download should begin shortly.
            </p>
          )}

          <div className="button-row">
            <button
              type="submit"
              className="btn btn-submit"
              disabled={loading}
            >
              Submit & Download
            </button>
                        <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
