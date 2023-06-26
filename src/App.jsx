import React, { useEffect, Suspense } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/tailwind.css';

import AOS from 'aos';

import Home from './pages/Home';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
