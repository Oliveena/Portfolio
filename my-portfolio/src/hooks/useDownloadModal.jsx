import { useState } from "react";

export default function useDownloadModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [formData, setFormData] = useState({ userName: "", userEmail: "" });
  const [errors, setErrors] = useState([]);

  const openModal = (file) => {
    setSelectedFile(file);
    setErrors([]);
    setFormData({ userName: "", userEmail: "" });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const handleSubmit = async (e, onCloseCallback = () => {}) => {
    e.preventDefault();
    const newErrors = [];

    if (!formData.userName.trim())
      newErrors.push("Please provide your Name or Company Name.");

    if (!formData.userEmail.trim())
      newErrors.push("Email cannot be empty.");
    else if (!validateEmail(formData.userEmail.trim()))
      newErrors.push("Please enter a valid email address.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    localStorage.setItem("userName", formData.userName.trim());
    localStorage.setItem("userEmail", formData.userEmail.trim());

    try {
      const response = await fetch("/save-info.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.userName.trim(),
          email: formData.userEmail.trim(),
        }),
      });
      if (!response.ok) console.error("Error saving data.");
      else console.log("Data saved successfully.");
    } catch (err) {
      console.error("Error saving data:", err);
    }

    onCloseCallback();

    // Download file
    if (selectedFile) {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = selectedFile;
        a.download = selectedFile.split("/").pop() || "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);
    } else {
      alert("No file selected.");
    }
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    formData,
    setFormData,
    errors,
    handleSubmit,
  };
}
