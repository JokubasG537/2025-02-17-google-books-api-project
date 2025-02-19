import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Featured() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const categories = ["fiction", "history", "science", "mystery", "fantasy", "biography"];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        const randomStartIndex = Math.floor(Math.random() * 100);

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${randomLetter}+subject:${randomCategory}&startIndex=${randomStartIndex}&maxResults=20&key=AIzaSyANxldAk-BTUIogU74u5pP-trF3LqQC1XA`
        );


        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();


        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError(error.message);
      }
    }

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (books === null) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div>
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
}

export default Featured;
