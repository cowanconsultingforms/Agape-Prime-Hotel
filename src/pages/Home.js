import React from 'react';
import sunsetVideo from '../assets/images/videos/sunsetbluedark.mp4';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import RoomCard from '../components/RoomCard';

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
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

         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      
      
    </div>
  );
}