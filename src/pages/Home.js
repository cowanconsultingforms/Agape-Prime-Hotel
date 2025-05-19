import React from 'react';
import sunsetVideo from '../assets/images/videos/sunsetbluedark.mp4'; // ✅ adjust based on your actual path
import Button from 'react-bootstrap/Button';
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

    <RoomCard></RoomCard>

      
      
    </div>
  );
}