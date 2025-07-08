/* 
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

import massageImg from '../assets/images/massage.jpg';
import headSpaImg from '../assets/images/headspa.jpg';
import facialsImg from '../assets/images/facials.jpg';
import bodyTreatmentsImg from '../assets/images/body-treatments.jpg';
import scrubsImg from '../assets/images/scrubs.jpg';
import expressImg from '../assets/images/express.jpg';
import bathSaunaImg from '../assets/images/bath-sauna.jpg';

// ✅ Your data array right above your component (same pattern as villas)
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

// ✅ Your component function
const WellnessCard = () => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Wellness Services
    </Typography>
    <Typography variant="subtitle1" align="center" color="text.secondary">
      Relax, recharge, and rejuvenate with our full service spa offerings.
    </Typography>

    <Grid container spacing={4} mt={2}>
      {wellnessServices.map((service) => (
        <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              image={service.image}
              alt={service.name}
              sx={{ height: 200, objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{service.name}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {service.subtitle}
              </Typography>
              <Typography variant="body2" mt={1}>
                {service.description}
              </Typography>
            </CardContent>

            <Box sx={{ p: 2 }}>
              <Button variant="contained" fullWidth>Book Now</Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WellnessCard;

*/