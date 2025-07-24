import React from 'react';
import RoomCard from '../components/RoomCard';
import { Grid, Container } from '@mui/material';

const Rooms = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden", minHeight: "100vh" }}>
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
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={3} display="flex">
            <RoomCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Rooms;
