import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import './css/tailwind.css';
import AOS from 'aos';
import Home from './pages/Home';
import LoadingAnimation from './partials/LoadingAnimation';

function App() {
  const location = useLocation();
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    // Simulate loading process
    const loadingTimeout = setTimeout(() => {
      setIsLoadingComplete(true);
    }, 2600);

    // Clean up the timeout on component unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Suspense fallback={<LoadingAnimation />}>
      {/* <Home />
      <LoadingAnimation /> */}
      
     {/* Uncomment below for 2nd approach */}
          
      {!isLoadingComplete ? (
        <LoadingAnimation />
      ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      )}
    </Suspense>
  );
}

export default App;
