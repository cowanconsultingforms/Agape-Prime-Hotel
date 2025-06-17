import React from 'react';
import RoomCard from '../components/RoomCard';



const Rooms = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden"}}>
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

      <RoomCard></RoomCard>

    
    
  </div>
   
  );
};

export default Rooms;
