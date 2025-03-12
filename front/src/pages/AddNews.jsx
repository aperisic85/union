import React from 'react';
import NewsForm from '../components/NewsForm';

const AddNews = ({ onAddNews }) => {
  return (
    <div className="page-content container">
      <h1>Unos novosti</h1>
      <NewsForm onSubmit={onAddNews} />
    </div>
  );
};

export default AddNews;
