import { useState } from "react";

export default function useDownloadModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ userName: "", userEmail: "" });
  const [errors, setErrors] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const openModal = (fileUrl) => {
    setDownloadLink(fileUrl);
    setModalOpen(true);
    setSuccess(false);
    setLoading(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setErrors([]);
    setFormData({ userName: "", userEmail: "" });
    setDownloadLink(null);
    setLoading(false);
    setSuccess(false);
  };

  const handleSubmit = (data) => {
    const newErrors = [];
    if (!data.userName.trim()) newErrors.push("Name is required");
    if (!data.userEmail.trim()) newErrors.push("Email is required");
    else if (!/\S+@\S+\.\S+/.test(data.userEmail)) newErrors.push("Email is invalid");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setLoading(true);

    // Simulate async submission
    setTimeout(() => {
      if (downloadLink) {
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setLoading(false);
      setSuccess(true);

      // Automatically close modal after a delay
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 1000);
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    formData,
    setFormData,
    errors,
    handleSubmit,
    loading,
    success,
    downloadLink,
  };
}
