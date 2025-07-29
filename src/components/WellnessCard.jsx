import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button
} from '@mui/material';

import massageImg from '../assets/images/wellness-images/massageImg.jpg';
import headSpaImg from '../assets/images/wellness-images/headspa.png';
import facialsImg from '../assets/images/wellness-images/facialsImg.jpg';
import bodyTreatmentsImg from '../assets/images/wellness-images/bodyTreatmentImg.jpg';
import scrubsImg from '../assets/images/wellness-images/scrubsImg.jpg';
import expressImg from '../assets/images/wellness-images/expressImg.jpg';
import bathSaunaImg from '../assets/images/wellness-images/bathSaunaImg.jpg';

const wellnessServices = [
  {
    id: 1,
    name: 'Massages',
    subtitle: 'Full Body, Swedish, Deep Tissue',
    image: massageImg,
    description: 'Relax and rejuvenate with our expert massage therapies.',
  },
  {
    id: 2,
    name: 'Head Spa',
    subtitle: 'Scalp Therapy',
    image: headSpaImg,
    description: 'Restore your mind with our luxury head spa treatments.',
  },
  {
    id: 3,
    name: 'Facials',
    subtitle: 'Custom Skin Rejuvenation',
    image: facialsImg,
    description: 'Glow with our facial treatments tailored for your skin.',
  },
  {
    id: 4,
    name: 'Body Treatments',
    subtitle: 'Exfoliation & Detox',
    image: bodyTreatmentsImg,
    description: 'Indulge your body with our detox and exfoliation services.',
  },
  {
    id: 5,
    name: 'Scrubs',
    subtitle: 'Custom Scrub Packages',
    image: scrubsImg,
    description: 'Exfoliate and nourish with our luxury body scrubs.',
  },
  {
    id: 6,
    name: 'Express Treatments',
    subtitle: 'Quick Luxury',
    image: expressImg,
    description: 'Short on time? Recharge fast with our express services.',
  },
  {
    id: 7,
    name: 'Bath/Sauna Rental',
    subtitle: 'Sauna, Jacuzzi, Arctic Tub',
    image: bathSaunaImg,
    description: 'Full private spa experiences with all the amenities.',
  },
];

const WellnessCard = () => (
  <Box className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
  <Box className="w-full max-w-7xl">
    <Typography variant="h4" align="center" className="text-3xl font-semibold text-gray-800 mb-2">
      Wellness Services
    </Typography>
    <Typography variant="subtitle1" align="center" className="text-gray-500 mb-6">
      Relax, recharge, and rejuvenate with our full service spa offerings.
    </Typography>

    <Grid container spacing={4} className="mt-4">
      {wellnessServices.map((service) => (
        <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} className="flex">
         <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} className="flex">
  <Card className="flex flex-col justify-between w-full h-[500px] shadow-md hover:shadow-xl transition duration-300">
    <CardMedia
      component="img"
      image={service.image}
      alt={service.name}
      className="h-52 object-cover"
    />
    <CardContent className="flex-grow">
      <Typography variant="h6" className="text-lg font-bold text-gray-800">
        {service.name}
      </Typography>
      <Typography variant="subtitle2" className="text-sm text-gray-500">
        {service.subtitle}
      </Typography>
      <Typography variant="body2" className="mt-2 text-sm text-gray-600">
        {service.description}
      </Typography>
    </CardContent>
    <Box className="p-4">
      <Button
        variant="contained"
        fullWidth
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
      >
        Book Now
      </Button>
    </Box>
  </Card>
</Grid>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>
);

export default WellnessCard;