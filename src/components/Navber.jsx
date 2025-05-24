import { useContext, useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setDarkMode(storedTheme === 'dark');
  }, []);

  return (
    <div className="bg-white dark:bg-black shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to={'/'} className="flex items-center">
            <a className="btn btn-ghost font-rancho text-3xl text-orange-600"> Equi Sports </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal dark:text-white gap-5 font-semibold font-raleway">
            <Link to={'/all-equipments'} className=''> All Sports Equipments </Link>
            <Link to={'/my-equipment'} className=""> My Equipment </Link>
            <Link to={'/add-equipment'} className=""> Add Equipment </Link>
          </div>
        </div>
        <div className="navbar-end gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl dark:text-white p-2 border dark:border-white  rounded-full"
          >
            {darkMode ? <CiLight /> : <CiDark />}
          </button>
          { user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end z-50">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Profile Avatar" src={user?.photoURL || "https://via.placeholder.com/150"}/>
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm border-2 border-orange-200 bg-orange-300 bg-opacity-20 gap-2 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                    <div className="py-3">
                      <h3 className="text-center font-bold pb-1 text-orange-600">{user?.displayName}</h3>
                      <h3 className="text-center font-normal text-cyan-50">{user?.email}</h3>
                    </div>
                    <Link to="/profile" className="btn bg-orange-600 hover:bg-orange-500 text-cyan-50 border-none w-28 mb-3"> My Profile </Link>
                    { user ? <button onClick={logOut} className="btn bg-orange-600 hover:bg-orange-500 text-white border-none w-28"> Logout </button> : <Link to="/login" className="btn bg-orange-600 hover:bg-orange-500 hover:text-white border-none w-28"> Login </Link>
                    }
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="">
              <Link to={'/login'} className="btn"> Login </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;