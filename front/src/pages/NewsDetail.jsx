import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const [newsItem, setNewsItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        // Ovdje biste normalno dohvatili podatke s API-ja
        // Za sada ćemo simulirati dohvat podataka
        const dummyNews = {
          id: parseInt(id),
          title: "Naslov novosti",
          content: "Sadržaj novosti...",
          date: new Date().toLocaleDateString()
        };
        setNewsItem(dummyNews);
      } catch (error) {
        console.error('Error fetching news item:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (isLoading) {
    return <div>Učitavanje...</div>;
  }

  if (!newsItem) {
    return <div>Novost nije pronađena</div>;
  }

  return (
    <div className="page-content container">
      <h1>{newsItem.title}</h1>
      <p className="news-date">Objavljeno: {newsItem.date}</p>
      <div className="news-content">{newsItem.content}</div>
    </div>
  );
};

export default NewsDetail;
