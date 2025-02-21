import React, { useState, useEffect } from 'react';
import './QuotesStyle.scss';

function FetchQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://quoteslate.vercel.app/api/quotes/random?count=1');
        const data = await res.json();
        setQuotes(Array.isArray(data) ? data : [data]);
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
    <div className="quote-wrapper">
      {quotes.map((item, index) => (
        <div key={index} className="quote-wrapper">
          <h2>{item.quote}</h2>
          <span className="author">
            {item.author === 'Unknown' ? 'Unknown author' : item.author}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FetchQuotes;
