import React from "react";
import { Link } from "react-router-dom";

function Results({ books, loading, currentPage, totalPages, onPageChange }) {
  const renderBooks = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!books || books.length === 0) {
      return <p>No books found.</p>;
    }

    return (
      <div className="result-books-wrapper">
      {books.map((item, index) => {
        const bookId = item.id;
        const imageSrc = item?.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Image";
        const title = item?.volumeInfo?.title || "No title available";

        return (
          <Link to={`/book/${bookId}`} key={index} className="book-item">
            <img src={imageSrc} alt={title} />
            <p>{title}</p>

          </Link>
        );
      })}
    </div>
    );
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      {renderBooks()}
      {renderPagination()}
    </div>
  );
}

export default Results;
