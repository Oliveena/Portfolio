import React, { useState, useEffect } from "react";

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

const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
  };

  if (!fields.length) return null; // render nothing if no fields provided

  return (
    <section className={`${className} form-section`}>
  <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <fieldset className="border p-4 rounded">
            <h2 className="mb-3">{title}</h2>

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
      </div>
    </section>
  );
}