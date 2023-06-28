import React, { useEffect } from 'react';

const LoadingAnimation = () => {
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
        const loadingPage = document.getElementById('loading-page');
        const loader = document.getElementById('loader');
        const lastray = document.getElementById('lastray');
        const body = document.body;
  
        loadingPage.classList.add('loaded');
        loader.classList.add('opzero');
        lastray.classList.add('finalray');
        body.classList.add('whitebk');
      }, 6500);
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(loadingTimeout);
    }, []);

  return (
    <div className="container z-50 relative">
      <div id="loading-page">
      <div id="loader">
        <div class="particles element">
          <div class="spark1 spark element"><div class="particle1 particle element"></div></div>
          <div class="spark2 spark element"><div class="particle2 particle element"></div></div>
          <div class="spark3 spark element"><div class="particle3 particle element"></div></div>
          <div class="spark4 spark element"><div class="particle4 particle element"></div></div>
          <div class="spark5 spark element"><div class="particle5 particle element"></div></div>
          <div class="spark6 spark element"><div class="particle6 particle element"></div></div>
          <div class="spark7 spark element"><div class="particle7 particle element"></div></div>
          <div class="spark8 spark element"><div class="particle8 particle element"></div></div>
          <div class="spark9 spark element"><div class="particle9 particle element"></div></div>
          <div class="spark10 spark element"><div class="particle10 particle element"></div></div>
          <div class="spark11 spark element"><div class="particle11 particle element"></div></div>
          <div class="spark12 spark element"><div class="particle12 particle element"></div></div>
        </div>
        <div class="ray element"></div>
        <div class="sphere element"></div>
      </div>
    </div>
    <div id="lastray" class="element"></div>
    </div>
  );
};

export default LoadingAnimation;
