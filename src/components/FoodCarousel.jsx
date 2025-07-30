import Carousel from 'react-bootstrap/Carousel';

// Food assets
import brieProsciuttoImg from "../assets/images/food-images/brie-prosciutto.png"; 
import charcuterieImg from "../assets/images/food-images/charcuterie.jpg"; 
import empanadasImg from "../assets/images/food-images/chicken-empanadas.jpg";
import gardenKaleSaladImg from "../assets/images/food-images/gardenkalesalad.png"; 
import fishslidersImg from "../assets/images/food-images/fishsliders.png"; 
import hotWingsImg from "../assets/images/food-images/wings.jpg"; 
import italStewImg from "../assets/images/food-images/italstew.png"; 
import kebabsSkewersImg from "../assets/images/food-images/kebabs.jpg"; 
import salmonCrispsImg from "../assets/images/food-images/salmon-crisps.png"; 

const foodItems = [
  {
    img: brieProsciuttoImg,
    title: "Brie & Prosciutto",
    desc: "Creamy brie paired with savory prosciutto on toasted bread.",
  },
  {
    img: charcuterieImg,
    title: "Charcuterie Board",
    desc: "A selection of cured meats, cheeses, and accompaniments.",
  },
  {
    img: empanadasImg,
    title: "Chicken Empanadas",
    desc: "Crispy pastries filled with spiced chicken and herbs.",
  },
  {
    img: gardenKaleSaladImg,
    title: "Garden Kale Salad",
    desc: "Fresh kale with roasted veggies and vinaigrette.",
  },
  {
    img: fishslidersImg,
    title: "Fish Sliders",
    desc: "Mini fish burgers with tangy slaw on soft buns.",
  },
  {
    img: hotWingsImg,
    title: "Hot Wings",
    desc: "Spicy and crispy wings with housemade sauce.",
  },
  {
    img: italStewImg,
    title: "Ital Stew",
    desc: "Rich Caribbean veggie stew with bold flavors.",
  },
  {
    img: kebabsSkewersImg,
    title: "Kebabs & Skewers",
    desc: "Grilled skewers of seasoned meats and veggies.",
  },
  {
    img: salmonCrispsImg,
    title: "Salmon Crisps",
    desc: "Smoked salmon on crispy rice with dill cream.",
  },
];

function FoodCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      {foodItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.title}
            style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
          />
          <Carousel.Caption>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FoodCarousel;