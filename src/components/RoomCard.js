import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSwimmingPool, FaUmbrellaBeach, FaBell, FaCoffee, FaShower } from 'react-icons/fa';
import sunsetPalmsImg from '../assets/images/sunset-palms-villa.jpg';
import carribeanBreezeImg from '../assets/images/carribean-breeze-villa.jpg';
const RoomCard = () => {
  const villas = [
    {
      id: 1,
      name: "Sunset Palms Villa",
      subtitle: "Premium Beachfront",
      description: "Luxurious beachfront villa offering breathtaking sunset views over Tela Bay. This spacious accommodation features modern Caribbean design with a private veranda steps from the ocean.",
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
      description: "Nestled in our lush tropical gardens, this tranquil villa offers privacy and serenity with a spacious outdoor living area and a short walk to our pristine private beach.",
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
        name: "Caribbean Breeze Villa",
        subtitle: "Garden Retreat",
        description: "Nestled in our lush tropical gardens, this tranquil villa offers privacy and serenity with a spacious outdoor living area and a short walk to our pristine private beach.",
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
      }
  ];

  return (
    <div className="room-cards-container">
      <h2 className="section-title">Our Luxury Villas</h2>
      <p className="section-description">
        Experience the ultimate in Caribbean luxury with our exclusive collection of villas, 
        each offering a unique blend of comfort, privacy, and stunning views of Tela's pristine coastline.
      </p>
      
      <Row className="g-4 mt-3">
        {villas.map(villa => (
          <Col key={villa.id} lg={6} className="mb-4">
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
                  <Button variant="primary" className="booking-btn">Book Now</Button>
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