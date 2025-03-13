import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import NewsDetail from "./pages/NewsDetail";
import AddNewsForm from "./pages/AddNewsForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/news/:id" element={<NewsDetail />} />{" "}
          <Route path="/add-news" element={<AddNewsForm />} />
          {/* Ruta za detalje vijesti */}
          {/* Ostale rute */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
