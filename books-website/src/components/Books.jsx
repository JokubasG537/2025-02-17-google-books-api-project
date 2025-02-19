import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Featured from "./BooksComponents/Featured";
import Results from "./BooksComponents/Results";

const PAGE_SIZE = 20;

function Books() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query, page = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const startIndex = (page - 1) * PAGE_SIZE;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${PAGE_SIZE}&key=AIzaSyANxldAk-BTUIogU74u5pP-trF3LqQC1XA`
      );
      const data = await response.json();

      setBooks(data.items || []);
      setTotalPages(Math.ceil((data.totalItems || 0) / PAGE_SIZE));
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchBooks(searchQuery, 1);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setBooks([]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
        {searchQuery && (
          <button type="button" onClick={clearSearch}>
            Clear
          </button>
        )}
      </form>

      {!searchQuery ? (
        <Featured />
      ) : (
        <Results
          books={books}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => fetchBooks(searchQuery, page)}
        />
      )}
    </div>
  );
}

export default Books;