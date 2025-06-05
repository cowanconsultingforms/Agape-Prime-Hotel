import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // <-- Add this

// Assets
import sunsetVideo from '../assets/images/videos/sunsetbluedark.mp4';
import roomCardImg from '../assets/images/roomcardimg.jpg';
import wellnessCenterImg from '../assets/images/wellnesscenter.jpg'; 
import pbPavilionImg from '../assets/images/pbpavilionbar.jpg';
export default function Home() {
  const cards = [
    { img: roomCardImg, label: 'Reserve a Suite/Villa', to: '/rooms' },
    { img: wellnessCenterImg, label: 'Reserve Wellness Center', to: '/wellness' },
    { img: pbPavilionImg, label: 'Reserve PB Pavilion', to: '/pb-pavilion' }
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
        <source src={sunsetVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
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
              style={{ textDecoration: 'none' }} // Remove underline
            >
              <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
              <Card sx={{ minWidth: 300, maxWidth: 350, position: 'relative', color: 'white' }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  height="300"
                  sx={{ filter: 'brightness(0.7)' }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 16, width: '100%' }}>
                  <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
              </motion.div>
            </Link>
          ))}
        </Box>
      </Box>
    </div>
  );
}