import React, { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (Add your API call)');
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <form onSubmit={handleSubmit} id="contactForm">
                    <fieldset className="border p-4 rounded">
                        <h3 className="text-center mb-4 text-white">Contact Me</h3>

                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label text-white">Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                placeholder="Your Name Here"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label text-white">Email Address:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                placeholder="your@mail.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="phone" className="form-label text-white">Phone Number:</label>
                            <input
                                className="form-control"
                                type="tel"
                                id="phone"
                                placeholder="123-456-7890"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group mb-3">
              <textarea
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
              />
                        </div>

                        <button type="submit" className="btn btn-primary w-75">Submit</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
