import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INTER_FONT = "'Inter', Arial, Helvetica, sans-serif";

const PavillionCard = ({ event, priceColor, fontColor = '#111', onReserve }) => {
  const [showPopup, setShowPopup] = useState(false);

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1.2rem',
    boxShadow: '0 2px 16px #0002',
    padding: 20,
    width: '100%',
    maxWidth: 440,      // cap width on larger screens
    minWidth: 0,
    height: 'auto',     // let content dictate height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: INTER_FONT,
    color: fontColor,
    margin: '0 auto',
  };

  const imageWrapStyle = {
    width: '100%',
    aspectRatio: '16 / 10',   // responsive media box
    overflow: 'hidden',
    borderRadius: '0.8rem',
    marginBottom: 20,
    transition: 'transform 0.4s ease-in-out',
    cursor: 'pointer',
  };

  const titleStyle = {
    fontSize: 'clamp(1.1rem, 2.6vw, 2rem)',
    marginBottom: 8,
    fontFamily: INTER_FONT,
    fontWeight: 700,
    color: fontColor,
  };

  const priceStyle = {
    fontWeight: 600,
    marginBottom: 14,
    color: priceColor,
    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
    fontFamily: INTER_FONT,
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
    lineHeight: 1.6,
    textAlign: 'left',
    maxWidth: 320,
    fontFamily: INTER_FONT,
    color: fontColor,
  };

  const buttonStyle = {
    width: '100%',          // full-width on phones
    maxWidth: 260,          // sensible cap on desktop
    padding: '10px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 8,
    color: fontColor,
    fontWeight: 700,
    fontFamily: INTER_FONT,
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    marginTop: 20,
    letterSpacing: 0.3,
  };

  return (
    <>
      <div style={cardStyle}>
        {/* Image */}
        <div
          style={imageWrapStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => setShowPopup(true)}
          onTouchStart={() => setShowPopup(true)}
        >
          <img
            src={event.image}
            alt={event.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Title */}
        <h2 style={titleStyle}>{event.title}</h2>

        {/* Price */}
        <p style={priceStyle}>{event.price}</p>

        {/* Details */}
        <ul style={listStyle}>
          {event.details.map((item, i) => (
            <li key={i}>
              <span style={{ color: fontColor, marginRight: 8 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ flexGrow: 1 }} />

        {/* CTA: use onReserve if provided, else Link */}
        {onReserve ? (
          <button
            style={buttonStyle}
            onClick={onReserve}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            Reserve Now
          </button>
        ) : (
          <Link to="/reserve-pavilion" style={{ textDecoration: 'none', width: '100%', display: 'block', maxWidth: 260 }}>
            <button
              style={{ ...buttonStyle, width: '100%' }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              Reserve Now
            </button>
          </Link>
        )}
      </div>

      {/* Fullscreen Image Popup (mobile-friendly padding) */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: 'fixed',
            inset: 0,
            padding: 12,                    // keeps image off screen edges on phones
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            fontFamily: INTER_FONT,
          }}
        >
          <img
            src={event.image}
            alt={`${event.title} (full view)`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: 12,
              boxShadow: '0 0 20px #000',
              display: 'block',
            }}
          />
        </div>
      )}
    </>
  );
};

export default PavillionCard;