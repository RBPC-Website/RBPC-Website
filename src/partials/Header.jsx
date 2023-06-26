import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Countdown from '../utils/Countdown';

function Header() {

  const { i18n, t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
       i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    // Perform any additional logic based on the selected language
    i18n.changeLanguage(e.target.value);

    // Reload the window when change language
    // window.location.reload();
  };

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <>
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block" aria-label="">
              {/* Logo */}
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <select
                  className={`relative appearance-none rounded-md border-none font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-1 ease-in-out ${!top ? 'bg-transparent' : ''}`}
                  value={localStorage.getItem('i18nextLng')}
                  onChange={handleLanguageChange}
                >
                  <option
                    className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                    value="en"
                  >
                    English
                  </option>
                  <option
                    className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                    value="vi"
                  >
                    Tiếng Việt
                  </option>
                </select>
              </li>
              <li>
                <Link to="/" className={`font-bold px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600 hover:text-gray-900 font-medium' : 'text-green-100 hover:text-gray-100'}`}>{t("home")}</Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
