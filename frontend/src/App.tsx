import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyStory from "../pages/MyStory";
import Updates from "../pages/Updates";
import Poetry from "../pages/CheyPoetry";
import Cheyisms from "../pages/Cheyisms";
import SendWellWishes from "../pages/SendWellWishes";
import "../components/Header.css";
import "../components/Footer.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="pt-16 flex-grow">
          {/* Padding to account for the fixed header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<MyStory />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/poetry" element={<Poetry />} />
              <Route path="/cheyisms" element={<Cheyisms />} />
              <Route path="/send-well-wishes" element={<SendWellWishes />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
