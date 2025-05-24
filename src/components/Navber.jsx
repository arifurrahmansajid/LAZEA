import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AuthContext } from './AuthContext';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successful!");
      // Delay navigation to allow toast to display before redirecting
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Error logging out");
    }
  };

  return (
    <div className="bg-white dark:bg-black shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="relative">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute top-12 left-0 bg-base-100 rounded-box shadow p-2 z-50 w-52">
                <li>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-equipments" onClick={() => setMobileMenuOpen(false)}>
                    All Plants
                  </Link>
                </li>
                <li>
                  <Link to="/add-equipment" onClick={() => setMobileMenuOpen(false)}>
                    Add Plant
                  </Link>
                </li>
                <li>
                  <Link to="/my-equipment" onClick={() => setMobileMenuOpen(false)}>
                    My Plants
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to={'/'} className="flex items-center">
            <span
              className="btn btn-ghost font-rancho text-3xl"
              style={{ color: "#78cc44" }}
            >
              LAZEA
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal dark:text-white gap-5 font-semibold font-raleway">
            <Link to="/">Home</Link>
            <Link to="/all-equipments">All Plants</Link>
            <Link to="/add-equipment">Add Plant</Link>
            <Link to="/my-equipment">My Plants</Link>
          </div>
        </div>
        <div className="navbar-end gap-3">
          {/* Dark/Light Theme Toggle */}
          <button 
            onClick={handleToggleTheme}
            className="btn btn-ghost text-xl"
            title={darkMode ? "Switch to Light" : "Switch to Dark"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Profile Avatar" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm border-2 border-[#78cc44] bg-[#78cc44] bg-opacity-20 gap-2 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <div className="py-3">
                      <h3
                        className="text-center font-bold pb-1"
                        style={{ color: "#78cc44" }}
                      >
                        {user?.displayName}
                      </h3>
                      <h3 className="text-center font-normal text-cyan-50">
                        {user?.email}
                      </h3>
                    </div>
                    <Link
                      to="/profile"
                      className="btn bg-[#78cc44] hover:bg-[#78cc44] text-cyan-50 border-none w-28 mb-3"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn bg-[#78cc44] hover:bg-[#78cc44] text-white border-none w-28"
                    >
                      Logout
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to={'/login'} className="btn">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
