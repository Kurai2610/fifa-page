import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logoutUser } from "../api/Auth.api";

export function Navigation() {
  const isLoggedIn = isUserLoggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

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
        {isLoggedIn && (
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/players" className="text-white hover:text-gray-300">
                Jugadores
              </Link>
            </li>
            <li>
              <Link
                to="/technicians"
                className="text-white hover:text-gray-300"
              >
                Tecnicos
              </Link>
            </li>
            <li>
              <Link to="/teams" className="text-white hover:text-gray-300">
                Equipos
              </Link>
            </li>
          </ul>
        )}
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Cerrar sesión
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
