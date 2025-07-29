import Carousel from 'react-bootstrap/Carousel';

//food assets
import brieProsciuttoImg from "../assets/images/food-images/brie-prosciutto.png"; 
import charcuterieImg from "../assets/images/food-images/charcuterie.jpg"; 
import empanadasImg from "../assets/images/food-images/chicken-empanadas.jpg";
import gardenKaleSaladImg from "../assets/images/food-images/gardenkalesalad.png"; 
import fishslidersImg from "../assets/images/food-images/fishsliders.png"; 
import hotWingsImg from "../assets/images/food-images/wings.jpg"; 
import italStewImg from "../assets/images/food-images/italstew.png"; 
import kebabsSkewersImg from "../assets/images/food-images/kebabs.jpg"; 
import salmonCrispsImg from "../assets/images/food-images/salmon-crisps.png"; 

function FoodCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brieProsciuttoImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FoodCarousel;