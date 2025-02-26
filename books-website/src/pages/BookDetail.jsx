import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/BookDetailStyle.scss";

const stripHtmlTags = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
};

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

  const { volumeInfo, searchInfo } = book;
  const title = volumeInfo?.title || "No title available";
  const authors = volumeInfo?.authors?.join(", ") || "Unknown author";
  const publisher = volumeInfo?.publisher || "Unknown publisher";
  const publishedDate = volumeInfo?.publishedDate || "Unknown date";
  const description = stripHtmlTags(volumeInfo?.description || "No description available");
  const textSnippet = stripHtmlTags(searchInfo?.textSnippet || "");
  const thumbnail = volumeInfo?.imageLinks?.thumbnail || "";

  return (
    <div className="book-detail">
      <section className="book-header">
        <h1>{title}</h1>
        <p className="authors">{authors}</p>
      </section>

      <section className="book-main">
        <div className="book-image">
          {thumbnail && <img src={thumbnail} alt={title} />}
        </div>

        <div className="book-info">
          <p><strong>Publisher:</strong> {publisher}</p>
          <p><strong>Published Date:</strong> {publishedDate}</p>
          <p>{description}</p>
        </div>
      </section>

      {textSnippet && (
        <section className="book-excerpt">
          <blockquote>
            <strong>Excerpt:</strong> {textSnippet}
          </blockquote>
        </section>
      )}
    </div>
  );
}

export default BookDetail;
