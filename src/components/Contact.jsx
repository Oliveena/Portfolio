import React from "react";
import Form from "./Form";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const contactFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your Name Here", required: true },
  { id: "email", label: "Email Address", type: "email", placeholder: "your@mail.com", required: true },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "123-456-7890", required: false },
  { id: "message", label: "Message", type: "textarea", placeholder: "Your Message", required: true },
];
export default function ContactPage() {
  const handleContactSubmit = (data) => {
    console.log("Contact form data:", data);
  };

  return (
    <main className="form-section">
      <Form
        title="Contact Me"
        fields={contactFields}
        onSubmit={handleContactSubmit}
      />
    </main>
  );
}
