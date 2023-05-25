import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from "@mui/material";


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
    <Container
      sx={{
        pt: "1rem",
        mb: "4rem",
      }}
    >
    <div
      style={{
        backgroundImage: 'url("/homepage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Add this line
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "33.33%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1,
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: 'center',
        }}
      >
        اعثر على المقاس المثالي لقدميك
      </h2>
    </div>

    </Container>
  );
};

export default BackgroundImageComponent;
