import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path='/about' element={<About />} />
          {/* Ostale rute */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
