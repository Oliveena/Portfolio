import React, { useState, useEffect } from "react";

const preExistingBooks = [
  { title: "Chateaux de la colere", author: "Alessandro Barrico" },
  { title: "The Glass Castle", author: "Jeannette Walls" },
  { title: "Goodnight Punpun", author: "Inio Asano" },
  { title: "Why Lhasa de Sela Matters", author: "Fred Goodman" },
  { title: "Le Semaphore d'Alexandrie", author: "Robert Sole" },
];

export default function BookTable() {
  const [userBooks, setUserBooks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [errors, setErrors] = useState({ title: "", author: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("books")) || [];
    setUserBooks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(userBooks));
  }, [userBooks]);

  const validate = () => {
    const textRegex = /^[A-Za-z0-9\s.,'-]+$/;
    const newErrors = { title: "", author: "" };

    if (!newTitle.trim()) newErrors.title = "Title cannot be empty.";
    else if (!textRegex.test(newTitle.trim())) newErrors.title = "Invalid characters in title.";

    if (!newAuthor.trim()) newErrors.author = "Author cannot be empty.";
    else if (!textRegex.test(newAuthor.trim())) newErrors.author = "Invalid characters in author.";

    setErrors(newErrors);
    return !newErrors.title && !newErrors.author;
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      title: newTitle.trim(),
      author: newAuthor.trim()
    };

    setUserBooks([...userBooks, newBook]);
    setNewTitle("");
    setNewAuthor("");
    setErrors({ title: "", author: "" });
  };

  const handleEdit = (index, field, value) => {
    const updatedBooks = [...userBooks];
    updatedBooks[index][field] = value.trim();
    setUserBooks(updatedBooks);
  };

  const handleDelete = (index) => {
    const updated = [...userBooks];
    updated.splice(index, 1);
    setUserBooks(updated);
  };

  return (
    <div className="suggested-books mt-4">
      <h4>Book Suggestions</h4>
      <table className="table table-bordered text-start">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {preExistingBooks.map((book, i) => (
            <tr key={`pre-${i}`} className="table-secondary">
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td><em>Immutable</em></td>
            </tr>
          ))}
          {userBooks.map((book, i) => (
            <tr key={`user-${i}`}>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(i, "title", e.target.innerText)}
              >
                {book.title}
              </td>
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(i, "author", e.target.innerText)}
              >
                {book.author}
              </td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Book Form */}
      <form className="mt-3" onSubmit={handleAddBook} noValidate>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Book title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>
        <div className="mb-2 p-3">
          <input
            type="text"
            placeholder="Author"
            className={`form-control ${errors.author ? "is-invalid" : ""}`}
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          {errors.author && <div className="invalid-feedback">{errors.author}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100 p-3">
          Add Book
        </button>
      </form>
    </div>
  );
}
