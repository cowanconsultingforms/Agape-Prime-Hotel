import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';
import {
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaBell,
  FaCoffee,
  FaShower,
} from 'react-icons/fa';

//Images of Villas
import sunsetPalmsImg from '../assets/images/villa-images/sunset-palms-villa.jpg';
import carribeanBreezeImg from '../assets/images/villa-images/carribean-breeze-villa.jpg';
import oceanBreezeImg from '../assets/images/villa-images/ocean-breeze-villa.webp';
import blueHorizonImg from '../assets/images/villa-images/blue-horizon-villa.jpg';

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

const RoomCard = () => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Villas
    </Typography>
    <Typography variant="subtitle1" align="center" color="text.secondary">
      Experience the ultimate in Caribbean luxury with our exclusive collection of villas...
    </Typography>

    <Grid container spacing={4} mt={2} alignItems={'stretch'}>
      {villas.map((villa) => (
        <Grid item key={villa.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              minHeight: 500,
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                image={villa.image}
                alt={villa.name}
                sx={{ height: 200, width: "100%", objectFit: 'cover' }}
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
              }}
            >
              <Typography variant="h6" noWrap={false} sx={{minHeight:56}}>{villa.name}</Typography>
           <Typography
  variant="subtitle2"
  color="text.secondary"
  sx={{ minHeight: 40 }} // force subtitle area height
>
                {villa.subtitle}
              </Typography>

              <Box sx={{ mt: 1, fontSize: '0.9rem', color: 'text.secondary' }}>
                {villa.size} • {villa.maxOccupancy} • {villa.bedConfig}
              </Box>

              <Box sx={{ mt: 2, maxHeight: 120,  overflowY: 'auto', }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  Villa Amenities
                </Typography>
                <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
                  {villa.amenities.map((amenity, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ marginRight: 6 }}>{amenity.icon}</span>
                      <Typography variant="body2">{amenity.text}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>

              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" size="small">
                  View Details
                </Button>
                <Button variant="contained" size="small" href="booking">
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default RoomCard;