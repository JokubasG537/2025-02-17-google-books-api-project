import React from "react";

function Results({
  books,
  loading,
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Render books
  const renderBooks = () => {
    if (loading) {
      return <p>Loading...</p>; // Display loading text if still fetching
    }

    if (books.length === 0) {
      return <p>No books found.</p>; // If no books match the search
    }

    return (
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>
        ))}
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
