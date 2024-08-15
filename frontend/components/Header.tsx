import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";

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

  return (
    <Disclosure as="nav" className="bg-gray-800">
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
              <h1 className="text-white text-2xl font-bold">CheySpace</h1>
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
            <div className="flex items-center">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Donate Now!
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
      </>
    </Disclosure>
  );
};

export default Header;
