import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/mystory">Manage My Story</Link>
        </li>
        <li>
          <Link to="/admin/poetry">Manage Poetry</Link>
        </li>
        <li>
          <Link to="/admin/cheyisms">Manage Cheyisms</Link>
        </li>
        <li>
          <Link to="/admin/updates">Manage Updates</Link>
        </li>
        <li>
          <Link to="/admin/social-media">Manage Social Media Links</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
