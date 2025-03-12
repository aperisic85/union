import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = ({ news }) => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === parseInt(id));

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
