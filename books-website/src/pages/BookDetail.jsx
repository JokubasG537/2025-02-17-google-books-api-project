import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../components/BookDetailStyle.scss'

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyANxldAk-BTUIogU74u5pP-trF3LqQC1XA`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!book) return <h1>No book found.</h1>;


  const { volumeInfo } = book;
  const title = volumeInfo?.title || "No title available";
  const authors = volumeInfo?.authors?.join(", ") || "Unknown author";
  const publisher = volumeInfo?.publisher || "Unknown publisher";
  const publishedDate = volumeInfo?.publishedDate || "Unknown date";
  const description = volumeInfo?.description || "No description available";
  const thumbnail = volumeInfo?.imageLinks?.thumbnail || "";

  return (
    <div className="book-detail">
    <div className="book-header-author">
      <h1>{title}</h1>
      <p>{authors}</p>
    </div>

    <div className="details">
      {thumbnail && <img src={thumbnail} alt={title} />}
      <div className=""></div>
      <p><strong>Publisher:</strong> {publisher}</p>
      <p><strong>Published Date:</strong> {publishedDate}</p>
    </div>

      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

export default BookDetail;
