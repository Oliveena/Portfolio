import React, { useState, useEffect } from "react";
import useProfanityCheck from "../hooks/CheckProfanity";

export default function Form({
  title = "Form",
  fields = [],               // fields array passed in (required)
  onSubmit,                 // callback function (required)
  initialValues = {},       // optional initial values to populate form
  className = "",
}) {

  const initialFormState = {};
  fields.forEach(({ id }) => {
    initialFormState[id] = initialValues[id] || "";
  });

  const { checkText, loading, error } = useProfanityCheck();

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Validate a single field
  const validateField = (fieldId, value) => {
    const field = fields.find((f) => f.id === fieldId);
    if (!field) return "";

    // Required validation
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    // Email validation
    if (field.type === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    // Phone validation
    if (field.type === "tel" && value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(value) || value.replace(/\D/g, "").length < 10) {
        return "Please enter a valid phone number";
      }
    }

    // Min/max length validation
    if (field.minLength && value.trim().length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }
    if (field.maxLength && value.trim().length > field.maxLength) {
      return `${field.label} must be less than ${field.maxLength} characters`;
    }

    return "";
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // Real-time validation if field has been touched
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));

    // Validate on blur
    const error = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    // Validate all fields first
    const newErrors = {};
    let hasErrors = false;

    fields.forEach(({ id }) => {
      const error = validateField(id, form[id]);
      if (error) {
        newErrors[id] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(
      fields.reduce((acc, { id }) => ({ ...acc, [id]: true }), {})
    );

    if (hasErrors) {
      setIsSubmitting(false);
      setSubmitError("Please fix the errors above before submitting.");
      return;
    }

    // Check for profanity using bad-words library
    for (let { id } of fields) {
      const value = form[id];
      if (value.trim()) {
        const isProfane = await checkText(value);

        if (isProfane === null) {
          setSubmitError("Cannot check content now — please try later.");
          setIsSubmitting(false);
          return;
        }

        if (isProfane === true) {
          setSubmitError("Please remove inappropriate content from your submission.");
          setIsSubmitting(false);
          return;
        }
      }
    }

    // Submit to backend
    try {
      const response = await fetch("https://portfolio-dfwu.onrender.com/api/submit-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setForm(initialFormState); // Reset form
        setErrors({});
        setTouched({});

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error("Submission error:", result);

        // Handle rate limiting (429 status)
        if (response.status === 429) {
          setSubmitError("Too many submissions. Please wait a few minutes and try again.");
        } else {
          setSubmitError(result.message || result.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitError("Could not reach the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!fields.length) return null; // render nothing if no fields provided

  return (
    <section className={`${className} form-section`}>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="border p-4 rounded" disabled={isSubmitting}>
            <h2 className="form-title mb-3">{title}</h2>

            {/* Success Message */}
            {submitSuccess && (
              <div className="alert alert-success" role="alert">
                ✓ Submitted successfully! Thank you.
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="alert alert-danger" role="alert">
                {submitError}
              </div>
            )}

            {fields.map(({ id, label, type, placeholder, required }) => (
              <div className="form-group mb-3" key={id}>
                <label htmlFor={id} className="form-label text-white">
                  {label}{required && <span className="text-danger">*</span>}:
                </label>
                {type === "textarea" ? (
                  <textarea
                    className={`form-control ${
                      touched[id] && errors[id] ? "is-invalid" : ""
                    } ${touched[id] && !errors[id] && form[id] ? "is-valid" : ""}`}
                    id={id}
                    placeholder={placeholder}
                    rows={4}
                    value={form[id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={required}
                    style={{ backgroundColor: "white", color: "#111" }}
                  />
                ) : (
                  <input
                    className={`form-control ${
                      touched[id] && errors[id] ? "is-invalid" : ""
                    } ${touched[id] && !errors[id] && form[id] ? "is-valid" : ""}`}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={required}
                    style={{ backgroundColor: "white", color: "#111" }}
                  />
                )}
                {/* Field-level error message */}
                {touched[id] && errors[id] && (
                  <div className="invalid-feedback d-block">{errors[id]}</div>
                )}
              </div>
            ))}

            <div className="form-group mb-3 text-center">
              <button
                type="submit"
                className="btn btn-primary w-75"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </fieldset>
        </form>
        {loading && <p className="text-center mt-2">Checking content...</p>}
        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>
    </section>
  );
}