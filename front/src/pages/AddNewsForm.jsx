import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './AddNewsForm.css';

const API_BASE_URL = "http://localhost:3000/api";

const AddNewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      await axios.post(`${API_BASE_URL}/news`, { title, content });
      setMessage('Vijest je uspješno dodana!');
      setTitle('');
      setContent('');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Error adding news:", error);
      setMessage('Došlo je do greške prilikom dodavanja vijesti.');
      setIsError(true);
    }
  };

  return (
    <div className="add-news-form">
      <h2>Dodaj novu vijest</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Naslov vijesti"
          required
        />
        <div className="textarea-container">
          <div className="textarea-wrapper">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Sadržaj vijesti (podržava Markdown)"
              required
              rows={12}
            />
          </div>
          <div className="formatting-guide">
            <p>Formatiranje:</p>
            <ul>
              <li>**bold**</li>
              <li>*italic*</li>
              <li># Naslov</li>
              <li>- Lista</li>
              <li>[Link](http://example.com)</li>
            </ul>
          </div>
        </div>
        <div className="preview-toggle">
          <button type="button" onClick={() => setPreview(!preview)}>
            {preview ? 'Uredi' : 'Pregled'}
          </button>
        </div>
        {preview && (
          <div className="preview">
            <h3>Pregled:</h3>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
        <button type="submit">Dodaj vijest</button>
      </form>
      {message && (
        <div className={isError ? 'error-message' : 'success-message'}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AddNewsForm;
