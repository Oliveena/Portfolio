import React from 'react';

export default function Hobbies() {
  return (
    <div id="content">
      {/* ========================== READING SECTION ========================== */}
      <section className="reading-reviews text-center py-5">
        <h3>Reading Reviews</h3>

        <div className="transparent-background-warm">
          <div className="reading">
            <p>Ana has always been an avid reader. Here is a list of recent reads.</p>
            <ul className="books">
              <li className="flip"><strong>"My Favorite Thing Is Monsters"</strong> by Emil Ferris
                <span className="panel" id="panel1">[...]</span>
              </li>
              <li className="flip"><strong>"Encabanée"</strong> by Gabrielle Filteau-Chiba
                <span className="panel" id="panel2">[...]</span>
              </li>
              <li className="flip"><strong>"Ahab's Wife"</strong> by Sena Jeter Naslund
                <span className="panel" id="panel3">[...]</span>
              </li>
              <li className="flip"><strong>"The Enchantress of Florence"</strong> by Salman Rushdie
                <span className="panel" id="panel4">[...]</span>
              </li>
            </ul>
          </div>

          <p>Books recommended by users</p>
          <div className="suggested-books">{/* Table here */}</div>

          {/* Suggest a book form */}
          <div className="contact">
            <fieldset className="border p-4 rounded">
              <p>Would you like to suggest a book?</p>
              <form className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                  <label htmlFor="bookTitle" className="form-label">Enter book title</label>
                  <input type="text" id="bookTitle" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="bookAuthor" className="form-label">Enter author name</label>
                  <input type="text" id="bookAuthor" className="form-control" />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-75">Add Book</button>
                </div>
              </form>
            </fieldset>
          </div>

          {/* Google Book Search */}
          <div className="contact">
            <fieldset className="border p-4 rounded">
              <p>Searching for a particular book? Here's Google Books API!</p>
              <div className="mb-3">
                <label htmlFor="search" className="form-label">Enter Book Title</label>
                <input type="text" id="search" className="form-control" />
              </div>
              <div className="text-center">
                <button className="btn btn-primary w-100">Search</button>
              </div>
              <div className="book-container mt-4" id="bookResults">{/* Results */}</div>
            </fieldset>
          </div>
        </div>
      </section>

      {/* ========================== ART GALLERY SECTION ========================== */}
      <section className="watercolor-art-gallery py-5">
        <h3 className="text-center">Watercolor Painting</h3>

        <div className="transparent-background-cold">
          <p className="text-center">Painting is very relaxing.<br /> Here are some of my recent paintings.</p>
          <p className="text-center">Hover over them!</p>

          <div className="paintings">
            <div className="row row-cols-sm-2 row-cols-md-3 g-4">
              <div className="col">
                <a href="../shared_assets/images/IMG_20210208_090255_351.jpg" target="_blank" rel="noopener noreferrer">
                  <img src="../shared_assets/images/IMG_20210208_090255_351.jpg" alt="Watercolor of Vlad Dracula as a walrus" className="img-fluid rounded-3" loading="lazy" />
                </a>
              </div>
              {/* Repeat for other paintings */}
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary">More walruses!</button>
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Less walruses...</button>
          </div>
        </div>
      </section>
    </div>
  );
}
