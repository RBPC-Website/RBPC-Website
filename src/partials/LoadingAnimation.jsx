import React, { useEffect } from 'react';

const HackedTitle = () => {
  useEffect(() => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const event = document.getElementById("title");
      let interval = () => {
          let iteration = 0;

          clearInterval(interval);

          interval = setInterval(() => {
              event.innerText = event.innerText
                  .split("")
                  .map((letter, index) => {
                      if (index < iteration) {
                          return event.getAttribute('data-value')[index];
                      }

                      return letters[Math.floor(Math.random() * 26)];
                  })
                  .join("");

              if (iteration >= event.getAttribute('data-value').length) {
                  clearInterval(interval);
              }

              iteration += 1 / 4;
          }, 40);
      };
      interval();
  }, []);

  return (
    <h1 data-value='RBPC 2023' id="title" className="z-10 px-5 py-2 text-center h3 text-black-100 w-[300px]  bg-green-100">
    RBPC 2023
    </h1>
  )
}

const LoadingAnimation = () => {

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
        const loadingPage = document.getElementById('loading-page');
        const loader = document.getElementById('loader');
        const lastray = document.getElementById('lastray');
        const body = document.body;
  
        loadingPage.classList.add('loaded');
        loader.classList.add('opzero');
        body.classList.add('whitebk');
      }, 2000);
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(loadingTimeout);
    }, []);
    

  return (
    <div className="container z-50 relative">
      <div id="loading-page">
      <div id="loader">
        <div className="particles element">
          <div className="spark1 spark element"><div className="particle1 particle element"></div></div>
          <div className="spark2 spark element"><div className="particle2 particle element"></div></div>
          <div className="spark3 spark element"><div className="particle3 particle element"></div></div>
          <div className="spark4 spark element"><div className="particle4 particle element"></div></div>
          <div className="spark5 spark element"><div className="particle5 particle element"></div></div>
          <div className="spark6 spark element"><div className="particle6 particle element"></div></div>
          <div className="spark7 spark element"><div className="particle7 particle element"></div></div>
          <div className="spark8 spark element"><div className="particle8 particle element"></div></div>
          <div className="spark9 spark element"><div className="particle9 particle element"></div></div>
          <div className="spark10 spark element"><div className="particle10 particle element"></div></div>
          <div className="spark11 spark element"><div className="particle11 particle element"></div></div>
          <div className="spark12 spark element"><div className="particle12 particle element"></div></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] element flex justify-center items-center ">
          <HackedTitle />
        </div>
      </div>
    </div>
    <div id="lastray" className="element"></div>
    </div>
  );
};

export default LoadingAnimation;
