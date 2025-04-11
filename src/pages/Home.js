import React from 'react';
import sunsetVideo from '../assets/images/videos/sunsetbluedark.mp4'; // ✅ adjust based on your actual path

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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

      <div style={{ position: "relative", zIndex: 1, color: "#fff", textAlign: "center", paddingTop: "40vh" }}>
        <h1>Welcome to Hotel Agape Prime 🌅</h1>
        <h2>Reservation System</h2>
      </div>
    </div>
  );
}
