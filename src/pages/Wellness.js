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
import roomCardImg from '../assets/images/villas-suites-bubble.jpg';
import wellnessCenterImg from '../assets/images/wellnesscenter.jpg'; 
import pbPavilionImg from '../assets/images/pbpavilionbar.jpg';
import WellnessCard from '../components/WellnessCard';
import ReservationForm from '../components/ReservationForm';

const Wellness = () => {
     const cards = [
    { img: roomCardImg, label: 'Massages', to: '/rooms' },
    { img: wellnessCenterImg, label: 'Head Spa', to: '/wellness' },
    { img: pbPavilionImg, label: 'Facials', to: '/pbpavilion' }, 
     { img: roomCardImg, label: 'Body Treatments', to: '/rooms' },
    { img: wellnessCenterImg, label: 'Scrubs', to: '/wellness' },
    { img: pbPavilionImg, label: 'Express Treatments', to: '/pbpavilion' },
     { img: pbPavilionImg, label: 'Bath/Sauna Rental ', to: '/pbpavilion' } 
  ];

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

export default Wellness;