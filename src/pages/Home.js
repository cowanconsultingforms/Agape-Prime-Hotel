import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../css/Home.css";

// Assets
import roomCardImg from '../assets/images/villas-suites-bubble.jpg';
import wellnessCenterImg from '../assets/images/wellnesscenter.jpg';
import pbPavilionImg from '../assets/images/pbpavilionbar.jpg';

export default function Home() {
  const cards = [
    { img: roomCardImg, label: 'Reserve a Suite/Villa', to: '/rooms' },
    { img: wellnessCenterImg, label: 'Reserve Wellness Center', to: '/wellness' },
    { img: pbPavilionImg, label: 'Reserve PB Pavilion', to: '/pbpavilion' }
  ];

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      >
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          padding: '2rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {cards.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ width: { xs: 280, sm: 320, md: 350 }, position: 'relative', color: 'white' }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    height="300"
                    sx={{ filter: 'brightness(0.7)' }}
                  />
                  <CardContent sx={{ position: 'absolute', bottom: 16, width: '100%' }}>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ color: 'white', fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </Box>
      </Box>
    <div className="home-footer">
      <p>info@agapeprimehotel.com</p>
      <p>© Agape Prime Hotel, Inc. 2025–Present. All rights reserved.</p>
      <p>XXX TBD Road, Belize City, Belize XXXXX</p>
      <p>Phone: 1-877-732-3492 | Fax: 1-877-760-2763 / 1-718-771-5900</p>
      <p className="footer-note">Agape Prime Hotel logos are trademarks of Agape Prime, LLC. All information is deemed reliable but not guaranteed.</p>
    </div>
    </div>
  );
}
