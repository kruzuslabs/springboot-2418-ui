import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const isAdmin = true;

  //implmenet sub

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center">
        <a href="#" className="text-white font-bold text-xl">Logo</a>
      </div>
      <button
        className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white lg:hidden"
        onClick={toggleNav}
      >
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div
        className={`flex-grow ${navOpen ? "" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        id="nav"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          {!isAdmin
            ? (
              <>
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/"
                  >
                    Home
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/login"
                  >
                    Log in
                  </Link>
                </li>
              </>
            )
            : (
              <>
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/admin"
                  >
                    Admin Page
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/edit"
                  >
                    Edit Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/tickets/new"
                  >
                    New Ticket
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/tickets"
                  >
                    My Tickets
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-gray-400 px-4 py-2 block"
                    href="/tickets/completed"
                  >
                    Completed
                  </Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
