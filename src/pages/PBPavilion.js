import React from 'react';



const PBPavilion = () => {
  return (
       <div style={{ position: "relative", height: "100vh", overflowX: "hidden"}}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      >
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
   
  );
};

export default PBPavilion;
