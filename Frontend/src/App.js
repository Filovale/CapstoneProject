import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NotFound from './views/home/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/drone/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
