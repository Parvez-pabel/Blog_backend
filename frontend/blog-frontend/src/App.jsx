import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import ServicePage from "./Pages/ServicePage";
import DetailsPage from "./Pages/DetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/service" element={<ServicePage />} />
          <Route exact path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
