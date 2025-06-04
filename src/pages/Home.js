import React from 'react';
import sunsetVideo from '../assets/images/videos/sunsetbluedark.mp4';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import Box from '@mui/joy/Box';
import RoomCard from '../components/RoomCard';
import roomCardImg from '../assets/images/roomcardimg.jpg';
import wellnessCenterImg from '../assets/images/wellnesscenter.jpg'; 
import pbPavilionImg from '../assets/images/pbpavilionbar.jpg';
export default function Home() {
  return (
    <div style={{ position: "relative", overflowX: "hidden", height: "100vh" }}>
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
    height: '100vh', // full screen height
    display: 'flex',
    alignItems: 'center', // vertical center
    justifyContent: 'center', // horizontal center
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
    {[ 
      { img: roomCardImg, label: 'Reserve a Suite/Villa' },
      { img: wellnessCenterImg, label: 'Reserve Wellness Center' },
      { img: pbPavilionImg, label: 'Reserve PB Pavilion' }
    ].map((item, index) => (
      <Card key={index} sx={{ minWidth: 300, maxWidth: 350, position: 'relative', color: 'white' }}>
        <CardMedia
          component="img"
          image={item.img}
          height="300"
          sx={{ filter: 'brightness(0.7)' }}
        />
        <CardContent sx={{ position: 'absolute', bottom: 16, width: '100%' }}>
          <Typography variant="h6" align="center">{item.label}</Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
</Box>

    
    </div>
  );
}