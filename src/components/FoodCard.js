import React from 'react'
import { Box, Typography, Grid } from '@mui/material';

//Images of foods
import brieProsciuttoImg from "../assets/images/food-images/brie-prosciutto.png"; 
import charcuterieImg from "../assets/images/food-images/charcuterie.jpg"; 
import empanadasImg from "../assets/images/food-images/chicken-empanadas.jpg";
import gardenKaleSaladImg from "../assets/images/food-images/gardenkalesalad.png"; 
import fishslidersImg from "../assets/images/food-images/fishsliders.png"; 
import hotWingsImg from "../assets/images/food-images/wings.jpg"; 
import italStewImg from "../assets/images/food-images/italstew.png"; 
import kebabsSkewersImg from "../assets/images/food-images/kebabs.jpg"; 
import salmonCrispsImg from "../assets/images/food-images/salmon-crisps.png"; 


const Provisions = [
    {
    id: 1, 
    name: "Brie & Prosciutto", 
    Img: brieProsciuttoImg, 
    }, 
    {
    id: 2, 
    name: "Charcuterie", 
    Img: charcuterieImg, 
    }, 
    {
    id: 3, 
    name: "Empanadas", 
    Img: empanadasImg,
    }, 
    {
    id: 4, 
    name: "Garden Kale Salad", 
    Img: gardenKaleSaladImg,
    }, 
    {
    id: 5, 
    name: "Escovitch Fish Sliders", 
    Img: fishslidersImg, 
    }, 
    {
    id: 6, 
    name: "Hot Wings",
    Img: hotWingsImg, 
    }, 
    {
    id: 7, 
    name: "Ital Stew",
    Img: italStewImg,
    }, 
    {
    id: 8, 
    name: "Kebabs & Skewers",
    Img: kebabsSkewersImg,
    },
    {
    id: 9, 
    name: "Smoked Salmon Crisps", 
    Img: salmonCrispsImg, 
    }

  
]; 

const FoodCard = () => {
  return (
    <Box sx={{padding: 4}}>
    <Typography variant="h4" align="center" gutterBottom>
        Provisions
    </Typography>
    <Grid> 
      
    </Grid>
    </Box>

  )
}

export default FoodCard; 
