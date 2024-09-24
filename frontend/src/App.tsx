import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyStory from "../pages/MyStory";
import Updates from "../pages/Updates";
import Poetry from "../pages/CheyPoetry";
import Cheyisms from "../pages/Cheyisms";
import SendWellWishes from "../pages/SendWellWishes";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<MyStory />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/cheyisms" element={<Cheyisms />} />
      <Route path="/send-well-wishes" element={<SendWellWishes />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
