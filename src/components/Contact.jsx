import React, { useState } from "react";
import Form from "./Form";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const contactFields = [
    { id: "name", label: t("contact.name"), type: "text", placeholder: t("contact.name_placeholder"), required: true },
    { id: "email", label: t("contact.email"), type: "email", placeholder: t("contact.email_placeholder"), required: true },
    { id: "phone", label: t("contact.phone"), type: "tel", placeholder: t("contact.phone_placeholder"), required: false },
    { id: "message", label: t("contact.message"), type: "textarea", placeholder: t("contact.message_placeholder"), required: true },
  ];

  // Fake submit handler to demo success message without sending anything
  const handleSubmit = (formData) => {
    setSubmitted(true);
    console.log("Demo form submission data:", formData);
  };

  return (
    <main className="form-section">
      <Form
        title={t("contact.title")}
        fields={contactFields}
        onSubmit={handleSubmit}
        disableOnSubmit={submitted}  
      />
      {submitted && (
        <p style={{ textAlign: "center", marginTop: "1rem", color: "green", fontWeight: "bold" }}>
          Thanks for reaching out! (Demo only — no message sent)
        </p>
      )}
    </main>
  );
}
