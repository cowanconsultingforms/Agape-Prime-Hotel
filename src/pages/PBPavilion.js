import React from 'react';

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1.2rem',
  boxShadow: '0 2px 16px #0002',
  padding: '28px 20px',
  width: 320,
  height: 390,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: "'Cormorant Garamond', serif",
  color: '#fff',
  margin: '0 auto'
};

const imgPlaceholderStyle = {
  width: "100%",
  maxWidth: 200,
  height: 110,
  background: "rgba(255,255,255,0.15)",
  color: "#ccc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.8rem",
  marginBottom: 16,
  fontSize: "1rem",
  fontWeight: 600,
  fontFamily: "'Cormorant Garamond', serif"
};

// Color for each price label
const priceColors = ['#FFC300', '#FF5733', '#28B463', '#5DADE2', '#AF7AC5', '#F39C12'];

const events = [
  {
    title: 'The Bou-gie Bash',
    price: '$150+ PER PERSON',
    details: [
      '2-hour seated event',
      '12-course private provisions',
      '2-hour signature libations',
      'Minimum of 8 guests'
    ]
  },
  {
    title: 'Uni Live Once',
    price: '$300 PER PERSON',
    details: [
      '2-hour cocktail experience',
      '12 curated plates',
      '2 rolls per guest',
      'Full open bar',
      'Minimum of 15 guests'
    ]
  },
  {
    title: 'Sushi House Party',
    price: '$175 PER PERSON',
    details: [
      '2-hour event',
      'Passed bites & stations',
      'Private host & chefs',
      'Minimum of 15 guests'
    ]
  },
  {
    title: 'In-Home Sushi Dinner',
    price: '$230 PER PERSON',
    details: [
      '2-hour seated dinner',
      '17 curated courses',
      'Private chef & server',
      'Minimum of 6 guests'
    ]
  },
  {
    title: 'Tuna Spectacle',
    price: '$10K MINIMUM',
    details: [
      '3-hour dinner & show',
      'Whole roast or showcase plate',
      'Feeds up to 50 guests'
    ]
  },
  {
    title: 'Sushi Making Classes',
    price: '$75++ PER PERSON',
    details: [
      'Hands-on class',
      'Make 3 signature items',
      'Ends with tasting',
      'Optional take-home kit'
    ]
  }
];

const PBPavilion = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Card Grid */}
      <div
        style={{
          padding: '4rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          justifyItems: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {events.map((event, index) => (
          <div key={index} style={cardStyle}>
            <div style={imgPlaceholderStyle}>Image Placeholder</div>

            {/* Larger Title */}
            <h2 style={{ fontSize: '1.8rem', marginBottom: 6 }}>{event.title}</h2>

            {/* Custom Colored Price */}
            <p style={{
              fontWeight: 600,
              marginBottom: 12,
              color: priceColors[index % priceColors.length]
            }}>
              {event.price}
            </p>

            {/* Bullet List */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '0.95rem',
              lineHeight: '1.5',
              textAlign: 'left'
            }}>
              {event.details.map((item, i) => (
                <li key={i}>
                  <span style={{ color: '#000', marginRight: 8 }}>•</span>
                  <span style={{ color: '#fff' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBPavilion;
