import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../components/CategoryStyle.scss'
function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${id}&maxResults=40&key=AIzaSyANxldAk-BTUIogU74u5pP-trF3LqQC1XA`
        );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setCategory(data.items || []);
      } catch (error) {
        console.error("Error fetching category:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);


  const totalPages = Math.ceil(category.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const visibleBooks = category.slice(startIndex, endIndex);

  return (
    <div>
      {loading && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && category.length === 0 && <p>No books found.</p>}

      {!loading && !error && (
        <>
          <div className="books-list">
            {visibleBooks.map((item) => {
              const bookId = item.id;
              const imageSrc =
                item?.volumeInfo?.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x192?text=No+Image";
              const title = item?.volumeInfo?.title || "No title available";

              return (
                <Link to={`/book/${bookId}`} key={bookId} className="book-item">
                  <img src={imageSrc} alt={title} />
                  <p>{title}</p>
                </Link>
              );
            })}
          </div>


          {totalPages > 1 && (
            <div className="pagination">
              <button className="custom-button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button className="custom-button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Category;
