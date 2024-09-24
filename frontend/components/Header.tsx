import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-900">CheySpace</h1>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
            >
              My Story
            </Link>
            <Link
              to="/updates"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300"
            >
              Updates
            </Link>
            <Link
              to="/poetry"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300"
            >
              Poetry
            </Link>
            <Link
              to="/cheyisms"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300"
            >
              Cheyisms
            </Link>
            <Link
              to="/send-well-wishes"
              className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300"
            >
              Send Well Wishes
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
