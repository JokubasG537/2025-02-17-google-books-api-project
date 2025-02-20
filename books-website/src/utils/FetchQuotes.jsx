import React, { useState, useEffect } from 'react';

function FetchQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://quoteslate.vercel.app/api/quotes/random?count=3');
        const data = await res.json();
        setQuotes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-blue-500 text-white text-xl p-4">
      {quotes.map((item, index) => {
        return (
          <div key={index} className="quote-wrapper">
            <h2>{item.quote}</h2>
            <span className="author">
              {item.author === 'Unknown' ? (
                <span>Unknown author</span>
              ) : (
                <span>{item.author}</span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default FetchQuotes;