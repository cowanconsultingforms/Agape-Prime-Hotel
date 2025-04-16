import React from 'react';
import telaImage from '../assets/images/tela-background.jpg';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${telaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '0 0 10px black',
      }}
    >
      <h1>Welcome to Hotel Agape Prime 🌅</h1>
      <h2>Experience Paradise in Tela, Honduras </h2>
      <a href="#booking"><button>Book Now</button> </a>
    </div>
  );
}
