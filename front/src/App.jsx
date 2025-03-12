import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddNews from './pages/AddNews';
import NewsDetail from './pages/NewsDetail';
import Navbar from './components/Navbar';

function App() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Prva novost",
      content: "Ovo je prva novost na našoj stranici.",
      date: new Date().toLocaleString()
    },
    {
      id: 2,
      title: "Druga novost",
      content: "Ovo je druga novost.",
      date: new Date().toLocaleString()
    }
  ]);

  const handleAddNews = (newNews) => {
    setNews([{ ...newNews, id: Date.now(), date: new Date().toLocaleString() }, ...news]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home news={news} />} />
          <Route path="/add-news" element={<AddNews onAddNews={handleAddNews} />} />
          <Route path="/news/:id" element={<NewsDetail news={news} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
