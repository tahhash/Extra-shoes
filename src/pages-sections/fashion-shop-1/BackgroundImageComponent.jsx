import React, { useEffect, useState } from 'react';
import { Box, Container} from "@mui/material";


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
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          overflow: 'hidden',
        }}
      >
        <img
          src="/homepage.jpg"
          alt="Background Image"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            width: 'auto',
          }}
        />
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
      </Box>
    </Container>
  );
};

export default BackgroundImageComponent;
