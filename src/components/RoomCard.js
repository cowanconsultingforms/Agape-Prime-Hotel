import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSwimmingPool, FaUmbrellaBeach, FaBell, FaCoffee, FaShower } from 'react-icons/fa';


//TO DO: add unique villa images for each of the 

//imports of all villa images
import sunsetPalmsImg from '../assets/images/villa-images/sunset-palms-villa.jpg';
import carribeanBreezeImg from '../assets/images/villa-images/carribean-breeze-villa.jpg';
import oceanBreezeImg from '../assets/images/villa-images/ocean-breeze-villa.webp';
import blueHorizonImg from '../assets/images/villa-images/blue-horizon-villa.jpg'; 


const RoomCard = () => {

    // List of villa objects. 
    const villas = [
        {
          id: 1,
          name: "Sunset Palms Villa",
          subtitle: "Premium Beachfront",
        //  description: "Luxurious beachfront villa offering breathtaking sunset views over Tela Bay. This spacious accommodation features modern Caribbean design with a private veranda steps from the ocean.",
          image: sunsetPalmsImg,
          price: "$349",
          size: "1,200 sq ft",
          maxOccupancy: "4 guests",
          bedConfig: "1 King, 1 Sofa Bed",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Private infinity pool" },
            { icon: <FaUmbrellaBeach />, text: "Direct beach access" },
            { icon: <FaBell />, text: "Dedicated concierge" },
            { icon: <FaCoffee />, text: "Breakfast included" },
            { icon: <FaShower />, text: "Outdoor rainfall shower" }
          ]
        },
        {
          id: 2,
          name: "Caribbean Breeze Villa",
          subtitle: "Garden Retreat",
         // description: "Nestled in our lush tropical gardens, this tranquil villa offers privacy and serenity with a spacious outdoor living area and a short walk to our pristine private beach.",
          image: carribeanBreezeImg,
          price: "$289",
          size: "950 sq ft",
          maxOccupancy: "2 guests",
          bedConfig: "1 King",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Private plunge pool" },
            { icon: <FaUmbrellaBeach />, text: "Partial ocean view" },
            { icon: <FaBell />, text: "Dedicated concierge" },
            { icon: <FaCoffee />, text: "Breakfast included" },
            { icon: <FaShower />, text: "Outdoor shower" }
          ]
        },
        {
          id: 3,
          name: "Ocean Breeze Villa",
          subtitle: "Hillside Escape",
       //   description: "Perched on a lush hillside, this villa offers panoramic ocean views and a peaceful retreat surrounded by nature.",
          image: oceanBreezeImg,
          price: "$319",
          size: "1,050 sq ft",
          maxOccupancy: "3 guests",
          bedConfig: "1 Queen, 1 Sofa Bed",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Shared infinity pool" },
            { icon: <FaUmbrellaBeach />, text: "Shuttle to beach" },
            { icon: <FaBell />, text: "On-call concierge" },
            { icon: <FaCoffee />, text: "Complimentary breakfast" },
            { icon: <FaShower />, text: "Rainfall shower" }
          ]
        },
        {
          id: 4,
          name: "Blue Horizon Villa",
          subtitle: "Modern Oceanfront",
       //   description: "Experience luxury with contemporary flair in this oceanfront villa featuring floor-to-ceiling windows and modern amenities.",
          image: blueHorizonImg ,
          price: "$379",
          size: "1,300 sq ft",
          maxOccupancy: "4 guests",
          bedConfig: "2 Queens",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Private rooftop pool" },
            { icon: <FaUmbrellaBeach />, text: "Oceanfront view" },
            { icon: <FaBell />, text: "Private host" },
            { icon: <FaCoffee />, text: "Espresso machine" },
            { icon: <FaShower />, text: "Spa shower" }
          ]
        },
        {
          id: 5,
          name: "Tropical Hideaway Villa",
          subtitle: "Jungle View",
       //   description: "Surrounded by lush jungle foliage, this cozy villa is perfect for couples seeking seclusion and tranquility.",
          image: sunsetPalmsImg,
          price: "$249",
          size: "800 sq ft",
          maxOccupancy: "2 guests",
          bedConfig: "1 King",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Jungle plunge pool" },
            { icon: <FaUmbrellaBeach />, text: "Beach shuttle access" },
            { icon: <FaBell />, text: "On-demand service" },
            { icon: <FaCoffee />, text: "Morning coffee delivery" },
            { icon: <FaShower />, text: "Open-air shower" }
          ]
        },
        {
          id: 6,
          name: "Vista Del Mar Villa",
          subtitle: "Panoramic View",
       //   description: "Elegant villa perched on the cliffs with uninterrupted views of the Caribbean Sea and a romantic atmosphere.",
          image: carribeanBreezeImg,
          price: "$399",
          size: "1,500 sq ft",
          maxOccupancy: "2 guests",
          bedConfig: "1 King",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Private infinity edge pool" },
            { icon: <FaUmbrellaBeach />, text: "Private beach cabana" },
            { icon: <FaBell />, text: "Butler service" },
            { icon: <FaCoffee />, text: "In-villa breakfast" },
            { icon: <FaShower />, text: "Luxury bath & shower" }
          ]
        },
        {
          id: 7,
          name: "Serenity Sands Villa",
          subtitle: "Beachside Comfort",
        //  description: "A cozy beachfront villa perfect for families, featuring soft sandy access and a kids-friendly design.",
          image: sunsetPalmsImg,
          price: "$279",
          size: "1,000 sq ft",
          maxOccupancy: "4 guests",
          bedConfig: "1 Queen, 2 Twins",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Family pool access" },
            { icon: <FaUmbrellaBeach />, text: "Steps from beach" },
            { icon: <FaBell />, text: "Daily cleaning" },
            { icon: <FaCoffee />, text: "Coffee & snack bar" },
            { icon: <FaShower />, text: "Rainfall shower" }
          ]
        },
        {
          id: 8,
          name: "Palm Grove Villa",
          subtitle: "Private Estate",
        //  description: "A lavish private estate surrounded by palm trees, ideal for group stays and special celebrations.",
          image: carribeanBreezeImg,
          price: "$499",
          size: "2,000 sq ft",
          maxOccupancy: "6 guests",
          bedConfig: "2 Kings, 1 Queen",
          amenities: [
            { icon: <FaSwimmingPool />, text: "Large private pool" },
            { icon: <FaUmbrellaBeach />, text: "Private beach path" },
            { icon: <FaBell />, text: "24/7 concierge" },
            { icon: <FaCoffee />, text: "Full kitchen & bar" },
            { icon: <FaShower />, text: "Luxury walk-in showers" }
          ]
        }
      ];
      

  return (
    
    <div className="room-cards-container">
      <h2 className="section-title text-center">Our Luxury Villas</h2>
      <p className="section-description text-center">
        Experience the ultimate in Caribbean luxury with our exclusive collection of villas, 
        each offering a unique blend of comfort, privacy, and stunning views of Tela's pristine coastline.
      </p> 
      
      <Row className="g-4 mt-3">
        {villas.map(villa => (
          <Col key={villa.id} lg={3} className="mb-4">
            <Card className="h-100 villa-card">
              <div className="villa-image-container">
                <Card.Img variant="top" src={villa.image} alt={villa.name} className="villa-image" />
                <div className="price-tag">{villa.price}<span>/night</span></div>
              </div>
              <Card.Body>
                <Card.Title className="villa-title">{villa.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted villa-subtitle">{villa.subtitle}</Card.Subtitle>
                
                <div className="villa-quick-stats">
                  <span>{villa.size}</span> • 
                  <span>{villa.maxOccupancy}</span> • 
                  <span>{villa.bedConfig}</span>
                </div>
                
                <Card.Text className="villa-description">
                  {villa.description}
                </Card.Text>
                
                <h6 className="amenities-title">Villa Amenities</h6>
                <ul className="amenities-list">
                  {villa.amenities.map((amenity, index) => (
                    <li key={index} className="amenity-item">
                      <span className="amenity-icon">{amenity.icon}</span>
                      <span className="amenity-text">{amenity.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="card-actions">
                  <Button variant="outline-secondary" className="details-btn">View Details</Button>
             <Button href="#booking" variant="primary" className="booking-btn">Book Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomCard;