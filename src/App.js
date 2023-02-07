import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Headerf from "./components/header/Headerf";
import Headers from "./components/header/Headers";
import Login from "./components/user/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import BusinessThinktank from "./page/innerPage/BusinessThinktank";
import Faq from "./page/innerPage/Faq";
import SeniorConsultant from "./page/innerPage/SeniorConsultant";

const App = () => {
  return (
    <>
      <Router>
        <Headerf />
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/business-thinktank" element={<BusinessThinktank />} />
          <Route path="/senior-consultant" element={<SeniorConsultant />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
