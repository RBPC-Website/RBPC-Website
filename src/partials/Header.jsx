import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Dropdown } from 'flowbite-react';

function navigate(section) {
    window.scrollTo(0, document.getElementById(section).offsetTop)
}
function Header() {

  const { i18n, t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
       i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (language) => {
    // Perform any additional logic based on the selected language
    i18n.changeLanguage(language);

    // Reload the window when change language
    // window.location.reload();
  };

  const [top, setTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0); 


  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 
  
  // // Detect if user is scrolling down
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > scrollPosition) {
        document.querySelector("header").style.display = "none";
      } else {
        document.querySelector("header").style.display = "block";
      }

      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollPosition]);

  return (
    <>
    <header className={`fixed xsmall:pt-2 w-full z-30 md:bg-opacity-90 transition-opacity duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="content max-w-6xl px-5 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block" aria-label="">
              {/* Logo */}
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow xsmall:scale-[88%] xsmall:translate-x-[-22%]">
            <ul className="flex flex-grow justify-end items-center gap-3 text-center">
              <li>
                <Dropdown color={'light'} label={localStorage.getItem('i18nextLng') == 'vi' ? 'Tiếng Việt' : "English"}>
                    <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLanguageChange('vi')}>Tiếng Việt</Dropdown.Item>
                </Dropdown>
              </li>
              <li>
                <Dropdown label={t('explore')} color='light'>
                    {
                        ["hero", "areaOfFocus", 'prizes', 'timeline', 'judges', 'rules'].map(section => {
                            return (
                                <Dropdown.Item onClick={() => navigate(section)}>{t(section)}</Dropdown.Item>
                            )
                        })
                    }
                </Dropdown>
              </li>
              <li>
                <Link to="/" className={`font-bold flex items-center transition duration-150 ease-in-out hover:underline ${!top ? 'text-gray-600 hover:text-gray-900 font-medium' : 'text-green-100 hover:text-gray-100'}`}>{t("register")}</Link>
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
