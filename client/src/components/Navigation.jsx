import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2023/05/World-Cup-2026-Logo.png"
            alt="FIFA Logo"
            className="w-20 h-20 object-contain mr-2"
          />
          <Link to="/" className="text-white text-5xl font-bold">
            FIFA
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/players" className="text-white hover:text-gray-300">
              Players
            </Link>
          </li>
          <li>
            <Link to="/technicians" className="text-white hover:text-gray-300">
              Technicians
            </Link>
          </li>
          <li>
            <Link to="/teams" className="text-white hover:text-gray-300">
              Teams
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/edit"
              className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              Editar
            </Link>
          </li>
          <li>
            <Link
              to="/sign-in"
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
