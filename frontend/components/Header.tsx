import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import DonateNow from "./DonateNow";

const navigation = [
  { name: "My Story", href: "/", current: false },
  { name: "Updates", href: "/updates", current: false },
  { name: "Chey's Poetry Corner", href: "/poetry", current: false },
  { name: "Cheyisms", href: "/cheyisms", current: false },
  { name: "Send Well Wishes", href: "/send-well-wishes", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
  const location = useLocation(); // Get the current route
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/auth/check-auth", {
          credentials: "include",
        });
        const data = await response.json();
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
          sessionStorage.setItem("isLoggedIn", "true");
        } else {
          setIsLoggedIn(false);
          sessionStorage.removeItem("isLoggedIn");
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLoggedIn(false);
        sessionStorage.removeItem("isLoggedIn");
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setIsLoggedIn(false);
        sessionStorage.removeItem("isLoggedIn");
        window.location.href = "/"; // Redirect to home page after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Disclosure as="nav" className="header-container">
      <>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              {/* Hamburger Menu Button for smaller screens */}
              <div className="mr-2 md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>
              {/* Adjust CheySpace font size for smaller screens */}
              <h1 className="text-white font-bold text-xl sm:text-2xl">
                CheySpace
              </h1>
              <div className="hidden md:flex md:space-x-8 ml-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={
                      location.pathname === item.href ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isLoggedIn && (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="text-white hover:underline"
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:underline"
                  >
                    Logout
                  </button>
                </>
              )}
              {/* Adjust Donate Now button size for smaller screens */}
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:px-2 sm:py-1 sm:text-xs"
                onClick={() => setShowModal(true)}
              >
                <i className="fas fa-donate mr-2"></i> Donate Now!
              </button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={
                  location.pathname === item.href ? "page" : undefined
                }
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
        <DonateNow show={showModal} onClose={() => setShowModal(false)} />
      </>
    </Disclosure>
  );
};

export default Header;
