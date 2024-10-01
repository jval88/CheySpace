import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyStory from "../pages/MyStory";
import Updates from "../pages/Updates";
import Poetry from "../pages/CheyPoetry";
import Cheyisms from "../pages/Cheyisms";
import SendWellWishes from "../pages/SendWellWishes";
import AdminLogin from "../pages/AdminLogin";
import "../components/Header.css";
import "../components/Footer.css";
import ManageMyStoryPage from "../adminPages/ManageMyStoryPage";
// ManagePoetryPage,
// ManageCheyismsPage,
// ManageUpdatesPage,
// ManageSocialMediaPage,
import AdminDashboard from "../adminPages/AdminDashboard";
import withAdminProtection from "../adminPages/withAdminProtection";

const ProtectedAdminDashboard = withAdminProtection(AdminDashboard);
const ProtectedManageMyStoryPage = withAdminProtection(ManageMyStoryPage);

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="pt-16 flex-grow">
          {/* Padding to account for the fixed header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              {/* Public */}
              <Route path="/" element={<MyStory />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/poetry" element={<Poetry />} />
              <Route path="/cheyisms" element={<Cheyisms />} />
              <Route path="/send-well-wishes" element={<SendWellWishes />} />
              <Route path="/admin-login" element={<AdminLogin />} />{" "}
              {/* Protected */}
              <Route
                path="/admin/dashboard"
                element={<ProtectedAdminDashboard />}
              />
              <Route
                path="/admin/mystory"
                element={<ProtectedManageMyStoryPage />}
              />
              {/* <Route path="/admin/poetry" component={withAdminProtection(ManagePoetryPage)} />
              <Route path="/admin/cheyisms" component={withAdminProtection(ManageCheyismsPage)} />
              <Route path="/admin/updates" component={withAdminProtection(ManageUpdatesPage)} />
              <Route path="/admin/social-media" component={withAdminProtection(ManageSocialMediaPage)} /> */}
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
