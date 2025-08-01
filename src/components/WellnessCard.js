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

import { useNavigate } from 'react-router-dom'; 

import massageImg from '../assets/images/wellness-images/massageback.jpg';
import headSpaImg from '../assets/images/wellness-images/headspa.png';
import facialsImg from '../assets/images/wellness-images/facialsImg.jpg';
import bodyTreatmentsImg from '../assets/images/wellness-images/blackrockonback.jpg';
import scrubsImg from '../assets/images/wellness-images/facemask.jpg';
import expressImg from '../assets/images/wellness-images/expressImg.jpg';
import bathSaunaImg from '../assets/images/wellness-images/lemonsonwater.jpg';
import agapepoolImg from "../assets/images/wellness-images/agapepool.jpg";

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
  {
    id: 8,
    name: 'Agape Pool Experience',
    subtitle: 'Private Pool & Wellness',
    image: agapepoolImg,
    description: 'Relax and rejuvenate at our luxurious pool with exclusive wellness services, refreshments, and stunning views.',
  },
];


const CARD_WIDTH = 320;
const CARD_HEIGHT = 390;
const IMAGE_HEIGHT = 170;
const INTER_FONT = "'Inter', Arial, Helvetica, sans-serif";


const WellnessCard = () => {
  const navigate = useNavigate(); 
  return (
    <Box
      sx={{
        px: { xs: 2, md: 0 },
        py: 4,
        width: "100%",
        maxWidth: 1360,
        margin: "0 auto",
        fontFamily: INTER_FONT,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: INTER_FONT, fontWeight: 700 }}
      >
        Wellness Services
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ fontFamily: INTER_FONT }}
      >
        Relax, recharge, and rejuvenate with our full service spa offerings.
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ fontFamily: INTER_FONT }}
      >
        {wellnessServices.map((service) => (
          <Grid
            item
            key={service.id}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ fontFamily: INTER_FONT }}
          >
            <Card
              sx={{
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 4,
                background: "#fff",
                fontFamily: INTER_FONT,
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.name}
                sx={{
                  height: IMAGE_HEIGHT,
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent sx={{ flexGrow: 1, pb: 1, fontFamily: INTER_FONT }}>
                <Typography
                  variant="h6"
                  align="center"
                  fontWeight={700}
                  sx={{ fontFamily: INTER_FONT }}
                >
                  {service.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  align="center"
                  fontWeight={500}
                  sx={{ fontFamily: INTER_FONT }}
                >
                  {service.subtitle}
                </Typography>
                <Typography
                  variant="body2"
                  mt={1}
                  align="center"
                  color="text.secondary"
                  sx={{ fontFamily: INTER_FONT }}
                >
                  {service.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: "1rem",
                    background: "#1643a1",
                    fontFamily: INTER_FONT,
                    ":hover": { background: "#0d1a4b" },
                  }}
                  onClick={() => navigate("/reserve-wellness")}
                >
                  BOOK NOW
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default WellnessCard;
