import React from "react";
import Form from "./Form";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function ContactPage() {
  const { t } = useTranslation();

  const contactFields = [
    { id: "name", label: t("contact.name"), type: "text", placeholder: t("contact.name_placeholder"), required: true },
    { id: "email", label: t("contact.email"), type: "email", placeholder: t("contact.email_placeholder"), required: true },
    { id: "phone", label: t("contact.phone"), type: "tel", placeholder: t("contact.phone_placeholder"), required: false },
    { id: "message", label: t("contact.message"), type: "textarea", placeholder: t("contact.message_placeholder"), required: true },
  ];

  const handleContactSubmit = (data) => {
    console.log("Contact form data:", data);
  };

  return (
    <main className="form-section">
      <Form
        title={t("contact.title")} // you can localize this too
        fields={contactFields}
        onSubmit={handleContactSubmit}
      />
    </main>
  );
}

