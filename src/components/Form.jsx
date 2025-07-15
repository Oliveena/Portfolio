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

  const handleChange = async (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for profanity
    for (let { id } of fields) {
      const value = form[id];
      if (value.trim()) {

        // Temporarily skip moderation check to test DB insertion
        /*
        const isProfane = await checkText(value);

        if (isProfane === null) {
          alert("Cannot check content now — please try later.");
          return;
        }

        if (isProfane === true) {
          alert("Please remove inappropriate content.");
          return;
        }
        */
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
        alert("Submitted successfully!");
        console.log("Success:", result);
        setForm(initialFormState); // Reset form
      } else {
        console.error("Submission error:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Could not reach the server.");
    }
  };

  if (!fields.length) return null; // render nothing if no fields provided

  return (
    <section className={`${className} form-section`}>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset className="border p-4 rounded">
            <h2 className="form-title mb-3">{title}</h2>
            {fields.map(({ id, label, type, placeholder, required }) => (
              <div className="form-group mb-3" key={id}>
                <label htmlFor={id} className="form-label text-white">
                  {label}:
                </label>
                {type === "textarea" ? (
                  <textarea
                    className="form-control"
                    id={id}
                    placeholder={placeholder}
                    rows={4}
                    value={form[id]}
                    onChange={handleChange}
                    required={required}
                    style={{ backgroundColor: "white", color: "#111" }}
                  />
                ) : (
                  <input
                    className="form-control"
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={handleChange}
                    required={required}
                    style={{ backgroundColor: "white", color: "#111" }}
                  />
                )}
              </div>
            ))}

            <div className="form-group mb-3 text-center">
              <button type="submit" className="btn btn-primary w-75">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        {loading && <p>Checking content...</p>}
        {error && <p className="text-danger">{error}</p>}
      </div>
    </section>
  );
}