import React, { useState } from 'react';

const NewsForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Naslov novosti"
        required
        className="form-input"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Sadržaj novosti"
        rows="5"
        required
        className="form-input"
      />
      <button type="submit" className="submit-btn">Objavi novost</button>
    </form>
  );
};

export default NewsForm;
