import React, { useEffect, useState } from 'react';

const BackgroundImageComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Mobi/.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isMobile) {
    return null; // Return null to hide the code on smartphones
  }

  return (
    <div
      style={{
        backgroundImage: 'url("/homepage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        width: '100vw', // Change to 100vw
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <h2
        style={{
          position: 'absolute',
          top: '50%',
          left: '33.33%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          zIndex: 1,
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        اعثر على المقاس المثالي لقدميك
      </h2>
    </div>
  );
};

export default BackgroundImageComponent;
