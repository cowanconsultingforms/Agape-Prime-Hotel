'use client'

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaBell,
  FaCoffee,
  FaShower,
} from 'react-icons/fa';

import sunsetPalmsImg from '../assets/images/villa-images/sunset-palms-villa.jpg';
import carribeanBreezeImg from '../assets/images/villa-images/carribean-breeze-villa.jpg';
import oceanBreezeImg from '../assets/images/villa-images/ocean-breeze-villa.webp';
import blueHorizonImg from '../assets/images/villa-images/blue-horizon-villa.jpg';

import {getDocs, collection} from 'firebase/firestore'; 
import { db } from '../firebase';

export async function fetchDataFromFirestore() {
 const villaSnapshot = await getDocs(collection(db, "villas"));
const availableVillas = villaSnapshot.docs

  availableVillas.map((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
const villas = [
  {
    id: 1,
    name: 'Sunset Palms Villa',
    subtitle: 'Premium Beachfront',
    image: sunsetPalmsImg,
    price: '$349',
    size: '1,200 sq ft',
    maxOccupancy: '4 guests',
    bedConfig: '1 King, 1 Sofa Bed',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Private infinity pool' },
      { icon: <FaUmbrellaBeach />, text: 'Direct beach access' },
      { icon: <FaBell />, text: 'Dedicated concierge' },
      { icon: <FaCoffee />, text: 'Breakfast included' },
      { icon: <FaShower />, text: 'Outdoor rainfall shower' },
    ],
  },
  {
    id: 2,
    name: 'Caribbean Breeze Villa',
    subtitle: 'Garden Retreat',
    image: carribeanBreezeImg,
    price: '$289',
    size: '950 sq ft',
    maxOccupancy: '2 guests',
    bedConfig: '1 King',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Private plunge pool' },
      { icon: <FaUmbrellaBeach />, text: 'Partial ocean view' },
      { icon: <FaBell />, text: 'Dedicated concierge' },
      { icon: <FaCoffee />, text: 'Breakfast included' },
      { icon: <FaShower />, text: 'Outdoor shower' },
    ],
  },
  {
    id: 3,
    name: 'Ocean Breeze Villa',
    subtitle: 'Hillside Escape',
    image: sunsetPalmsImg,
    price: '$319',
    size: '1,050 sq ft',
    maxOccupancy: '3 guests',
    bedConfig: '1 Queen, 1 Sofa Bed',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Shared infinity pool' },
      { icon: <FaUmbrellaBeach />, text: 'Shuttle to beach' },
      { icon: <FaBell />, text: 'On-call concierge' },
      { icon: <FaCoffee />, text: 'Complimentary breakfast' },
      { icon: <FaShower />, text: 'Rainfall shower' },
    ],
  },
  {
    id: 4,
    name: 'Blue Horizon Villa',
    subtitle: 'Modern Oceanfront',
    image: sunsetPalmsImg,
    price: '$379',
    size: '1,300 sq ft',
    maxOccupancy: '4 guests',
    bedConfig: '2 Queens',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Private rooftop pool' },
      { icon: <FaUmbrellaBeach />, text: 'Oceanfront view' },
      { icon: <FaBell />, text: 'Private host' },
      { icon: <FaCoffee />, text: 'Espresso machine' },
      { icon: <FaShower />, text: 'Spa shower' },
    ],
  },
  {
    id: 5,
    name: 'Tropical Hideaway Villa',
    subtitle: 'Jungle View',
    image: sunsetPalmsImg,
    price: '$249',
    size: '800 sq ft',
    maxOccupancy: '2 guests',
    bedConfig: '1 King',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Jungle plunge pool' },
      { icon: <FaUmbrellaBeach />, text: 'Beach shuttle access' },
      { icon: <FaBell />, text: 'On-demand service' },
      { icon: <FaCoffee />, text: 'Morning coffee delivery' },
      { icon: <FaShower />, text: 'Open-air shower' },
    ],
  },
  {
    id: 6,
    name: 'Vista Del Mar Villa',
    subtitle: 'Panoramic View',
    image: sunsetPalmsImg,
    price: '$399',
    size: '1,500 sq ft',
    maxOccupancy: '2 guests',
    bedConfig: '1 King',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Private infinity edge pool' },
      { icon: <FaUmbrellaBeach />, text: 'Private beach cabana' },
      { icon: <FaBell />, text: 'Butler service' },
      { icon: <FaCoffee />, text: 'In-villa breakfast' },
      { icon: <FaShower />, text: 'Luxury bath & shower' },
    ],
  },
  {
    id: 7,
    name: 'Serenity Sands Villa',
    subtitle: 'Beachside Comfort',
    image: sunsetPalmsImg,
    price: '$279',
    size: '1,000 sq ft',
    maxOccupancy: '4 guests',
    bedConfig: '1 Queen, 2 Twins',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Family pool access' },
      { icon: <FaUmbrellaBeach />, text: 'Steps from beach' },
      { icon: <FaBell />, text: 'Daily cleaning' },
      { icon: <FaCoffee />, text: 'Coffee & snack bar' },
      { icon: <FaShower />, text: 'Rainfall shower' },
    ],
  },
  {
    id: 8,
    name: 'Palm Grove Villa',
    subtitle: 'Private Estate',
    image: sunsetPalmsImg,
    price: '$499',
    size: '2,000 sq ft',
    maxOccupancy: '6 guests',
    bedConfig: '2 Kings, 1 Queen',
    amenities: [
      { icon: <FaSwimmingPool />, text: 'Large private pool' },
      { icon: <FaUmbrellaBeach />, text: 'Private beach path' },
      { icon: <FaBell />, text: '24/7 concierge' },
      { icon: <FaCoffee />, text: 'Full kitchen & bar' },
      { icon: <FaShower />, text: 'Luxury walk-in showers' },
    ],
  },
];

const RoomCard = () => {
  const [openVilla, setOpenVilla] = useState(null); //Modal Popup

  //Opens Modal
  const handleOpen = (villa) => {
    setOpenVilla(villa);
  };

  // Closes Modal
  const handleClose = () => {
    setOpenVilla(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Premium section header */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 800,
            letterSpacing: 2,
            color: '#263238',
            mb: 1,
            textShadow: '0 2px 18px #fff6',
          }}
        >
          Our Signature Villas & Suites
        </Typography>
        <Box
          sx={{
            width: 90,
            height: 4,
            background: 'linear-gradient(90deg, #002147 0%, #005792 100%)',
            borderRadius: 2,
            margin: '18px auto 18px auto',
            opacity: 0.6,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: '#455a64',
            maxWidth: 640,
            mx: 'auto',
            fontWeight: 500,
            letterSpacing: 1,
            mb: 2,
            lineHeight: 1.4,
            fontFamily: "'Cormorant Garamond', serif"
          }}
        >
          Discover a private sanctuary where every villa is crafted for serenity, comfort, and unforgettable Caribbean memories. Wake to ocean breezes, lounge by your own pool, and experience a world apart—yours to savor.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          mt: 2,
          justifyItems: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {villas.map((villa) => (
          <Box key={villa.id} sx={{ width: '100%', display: 'flex', height: '100%' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                minHeight: 360,
                fontFamily: "'Cormorant Garamond', serif"
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={villa.image}
                  alt={villa.name}
                  sx={{ height: 140, width: "100%", objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
                >
                  {villa.price}
                  <span style={{ fontWeight: 300 }}>/night</span>
                </Box>
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  pb: 0,
                  fontFamily: "'Cormorant Garamond', serif"
                }}
              >
                <Typography variant="h6" noWrap={false} sx={{ minHeight: 56, fontFamily: "'Cormorant Garamond', serif" }}>{villa.name}</Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ minHeight: 40, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {villa.subtitle}
                </Typography>

                <Box sx={{ mt: 1, fontSize: '1.02rem', color: 'text.secondary', fontFamily: "'Cormorant Garamond', serif" }}>
                  {villa.size} • {villa.maxOccupancy} • {villa.bedConfig}
                </Box>

                <Box sx={{ mt: 2, maxHeight: 72, overflowY: 'auto', fontFamily: "'Cormorant Garamond', serif" }}>
                  <Typography variant="subtitle2" fontWeight="bold" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Villa Amenities
                  </Typography>
                  <ul style={{ paddingLeft: '1.2em', margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                    {villa.amenities.map((amenity, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, fontFamily: "'Cormorant Garamond', serif" }}>
                        <span style={{ marginRight: 6 }}>{amenity.icon}</span>
                        <Typography variant="body2" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>{amenity.text}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                {/* BUTTONS ALWAYS AT THE BOTTOM */}
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                  <Button variant="outlined" size="small" onClick={() => handleOpen(villa)} sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    View Details
                  </Button>
                  <Button variant="contained" size="small" href="booking" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Dialog open={Boolean(openVilla)} onClose={handleClose} maxWidth="sm" fullWidth>
        {openVilla && (
          <>
            <DialogTitle sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {openVilla.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <img src={openVilla.image} alt={openVilla.name} style={{ width: '100%', borderRadius: 8, marginBottom: 12 }} />
              <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {openVilla.subtitle}
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <b>Size:</b> {openVilla.size}<br />
                <b>Max Occupancy:</b> {openVilla.maxOccupancy}<br />
                <b>Beds:</b> {openVilla.bedConfig}
              </Typography>
              <Box sx={{ mt: 2, fontFamily: "'Cormorant Garamond', serif" }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Villa Amenities
                </Typography>
                <ul style={{ paddingLeft: '1.2em', margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                  {openVilla.amenities.map((amenity, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, fontFamily: "'Cormorant Garamond', serif" }}>
                      <span style={{ marginRight: 6 }}>{amenity.icon}</span>
                      <Typography variant="body2" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>{amenity.text}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </DialogContent>
            <DialogActions sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <Button onClick={handleClose} variant="contained" color="primary" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Close
              </Button>
              <Button variant="contained" color="success" href="booking" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Book Now
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </Box>
  
  );
};

export default RoomCard;
