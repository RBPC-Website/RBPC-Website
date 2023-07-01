import React, { useEffect } from 'react';

export default function GlowyBlob() {
  useEffect(() => {
    const blob = document.getElementById('blob');

    if (blob) {
      document.body.onpointermove = (event) => {
        const { pageX, pageY } = event;

        blob.animate(
          {
            left: `${pageX}px`,
            top: `${pageY}px`,
          },
          { duration: 1500, fill: 'forwards' }
        );
      };
    }
  }, []);

  return (
    <section>
      <div id="blob" className="hidden lg:block"></div>
    </section>
  );
}
