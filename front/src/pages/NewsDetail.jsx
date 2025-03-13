import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewsDetail.css";
import defaultImage from "../assets/images/default_news_image.webp";
import ReactMarkdown from 'react-markdown';

const API_BASE_URL = "http://localhost:3000/api";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsItem = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/news/${id}`);
        setNewsItem({
          ...response.data,
          image: response.data.image || defaultImage,
          time: new Date(response.data.createdAt).toLocaleString("hr-HR", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        });
      } catch (error) {
        console.error("Error fetching news item:", error);
        setError("Nije moguće dohvatiti vijest. Molimo pokušajte kasnije.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (isLoading) {
    return <div className="loading-container">Učitavanje...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  if (!newsItem) {
    return <div className="error-container">Vijest nije pronađena.</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="news-detail-container">
      <div className="news-header">
        <img src={newsItem.image} alt={newsItem.title} className="news-image" />
        <span className="news-time">{newsItem.time}</span>
      </div>

      <h1 className="news-title">{newsItem.title}</h1>

      <div className="news-content">
        <ReactMarkdown>{newsItem.content}</ReactMarkdown>
      </div>

      <button onClick={goBack} className="back-button">
        &larr; Natrag na vijesti
      </button>
    </div>
  );
};

export default NewsDetail;
