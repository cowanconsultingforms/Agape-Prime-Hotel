import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import roomCardImg from '../assets/images/villas-suites-bubble.jpg';
import wellnessCenterImg from '../assets/images/wellnesscenter.jpg';
import pbPavilionImg from '../assets/images/pbpavilionbar.jpg';

const INTER_FONT = "'Inter', Arial, Helvetica, sans-serif";

export default function Home() {
  const cards = [
    { img: roomCardImg, label: 'Reserve a Suite/Villa', to: '/rooms' },
    { img: wellnessCenterImg, label: 'Reserve Wellness Center', to: '/wellness' },
    { img: pbPavilionImg, label: 'Reserve PB Pavilion', to: '/pbpavilion' }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        fontFamily: INTER_FONT,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: 6,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            zIndex: 1,
          }}
        >
          {cards.map((item, index) => (
            <Link to={item.to} key={index} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    width: { xs: 280, sm: 300, md: 330 },
                    position: 'relative',
                    fontFamily: INTER_FONT,
                    color: 'white',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    height="300"
                    sx={{ filter: 'brightness(0.7)' }}
                  />
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      width: '100%',
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontFamily: INTER_FONT,
                        fontWeight: 600,
                        letterSpacing: 0.2,
                        color: 'white',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          padding: '2rem 1rem',
          textAlign: 'center',
          fontFamily: INTER_FONT,
          fontSize: { xs: '0.85rem', sm: '1rem' },
          lineHeight: 1.6,
        }}
      >
        <p>info@agapeprimehotel.com</p>
        <p>© Agape Prime Hotel, Inc. 2025–Present. All rights reserved.</p>
        <p>XXX TBD Road, Belize City, Belize XXXXX</p>
        <p>Phone: 1-877-732-3492 | Fax: 1-877-760-2763 / 1-718-771-5900</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
          Agape Prime Hotel logos are trademarks of Agape Prime, LLC. All information is deemed reliable but not guaranteed.
        </p>
      </Box>
    </Box>
  );
}