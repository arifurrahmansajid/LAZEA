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
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Error logging out");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#78cc44] dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="navbar w-full max-w-7xl mx-auto px-4">
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
              <ul className="absolute top-12 left-0 bg-white rounded-box shadow p-2 z-50 w-52">
                <li>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-equipments" onClick={() => setMobileMenuOpen(false)}>
                    All Items
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => setMobileMenuOpen(false)}>
                    Support
                  </Link>
                </li>
                {user && (
                  <>
                    {/* Add Plant link for logged-in users 
                    <li>
                      <Link to="/add-equipment" onClick={() => setMobileMenuOpen(false)}>
                        Add Plant
                      </Link>
                    </li>
                    {/* My Plants link for logged-in users 
                    <li>
                      <Link to="/my-equipment" onClick={() => setMobileMenuOpen(false)}>
                        My Plants
                      </Link>
                    </li>
                    */}
                    <li>
                      <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                        Dashboard
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
          <Link to={'/'} className="flex items-center">
            <span
              className="btn btn-ghost font-rancho text-3xl text-white dark:text-[#78cc44]"
              style={{ color: "#fff" }}
            >
              LAZEA
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal gap-5 font-semibold font-raleway text-white dark:text-[#78cc44]">
            <Link to="/">Home</Link>
            <Link to="/all-equipments">All Items</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
            {user && (
              <>
                {/* Add Plant link for logged-in users 
                <Link to="/add-equipment">Add Plant</Link>
                {/* My Plants link for logged-in users 
                <Link to="/my-equipment">My Plants</Link>
                */}
                <Link to="/dashboard">Dashboard</Link>
              </>
            )}
          </div>
        </div>
        <div className="navbar-end gap-3">
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
                  className="menu menu-sm border-2 border-[#fff] bg-[#fff] bg-opacity-90 gap-2 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
                      <h3 className="text-center font-normal text-gray-700">
                        {user?.email}
                      </h3>
                    </div>
                    <Link
                      to="/profile"
                      className="btn bg-[#78cc44] hover:bg-[#66aa33] text-white border-none w-28 mb-3"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn bg-[#78cc44] hover:bg-[#66aa33] text-white border-none w-28"
                    >
                      Logout
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to={'/login'} className="btn bg-white text-[#78cc44] border-none hover:bg-gray-100">
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