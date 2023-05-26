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
    <Container sx={{
      pt: "1rem",
      mb: "4rem",
    }}>
      <Grid container justifyContent="center">
        <div
          style={{
            width: '100vw', // Set width to 100vw for full screen width
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden', // Ensure content stays within the parent div
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1, // Set z-index to move the background behind other content
            }}
          ></div>
          <h2
            style={{
              position: 'absolute',
              top: '50%',
              left: '33%',
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
          <div
            style={{
              backgroundImage: 'url("/homepage.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
            }}
          ></div>
        </div>
      </Grid>
    </Container>
  );
};

export default BackgroundImageComponent;
