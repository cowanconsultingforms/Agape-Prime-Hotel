import React from 'react';

const placeholderCards = Array.from({ length: 9 });

const cardStyle = {
  background: 'rgba(255,255,255,0.93)',
  borderRadius: '1.2rem',
  boxShadow: '0 2px 16px #2221',
  padding: '32px 18px 24px 18px',
  minHeight: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const imgPlaceholderStyle = {
  width: "100%",
  maxWidth: 210,
  height: 110,
  background: "#e3e3e3",
  color: "#777",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.8rem",
  margin: "0 auto 16px auto",
  fontSize: "1.08rem",
  fontWeight: 600,
  fontFamily: "'Cormorant Garamond', serif"
};

const btnStyle = {
  marginTop: 18,
  padding: '7px 24px',
  borderRadius: '0.9rem',
  background: '#003399',
  color: '#fff',
  border: 'none',
  fontWeight: 600,
  letterSpacing: '0.6px',
  fontFamily: "'Cormorant Garamond', serif",
  transition: 'background 0.2s',
  cursor: 'pointer',
};

const PBPavilion = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      >
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5vh" }}>
        <div className="row justify-content-center">
          {placeholderCards.map((_, idx) => (
            <div key={idx} className="col-12 col-md-4 d-flex align-items-stretch mb-4">
              <div style={cardStyle} className="w-100 text-center">
                {/* Image Placeholder */}
                <div style={imgPlaceholderStyle}>
                  Image Placeholder
                </div>
                <h5 style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 700}}>PB Pavilion Dish {idx + 1}</h5>
                <p style={{fontFamily: "'Cormorant Garamond', serif", color: '#222', minHeight: 50, marginTop: 10}}>
                  Placeholder description for menu item {idx + 1}.
                </p>
                <button style={btnStyle}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PBPavilion;
