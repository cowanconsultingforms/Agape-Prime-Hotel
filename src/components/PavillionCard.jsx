import React, { useState } from 'react';

const INTER_FONT = "'Inter', Arial, Helvetica, sans-serif";

const PavillionCard = ({ event, priceColor }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1.2rem',
                    boxShadow: '0 2px 16px #0002',
                    padding: '24px',
                    width: 440,
                    height: 720,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontFamily: INTER_FONT,
                    color: '#fff',
                    margin: '0 auto'
                }}
            >
                {/* Image section */}
                <div
                    style={{
                        width: '100%',
                        height: '270px',
                        overflow: 'hidden',
                        borderRadius: '0.8rem',
                        marginBottom: 24,
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onClick={() => setShowPopup(true)}
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            fontFamily: INTER_FONT
                        }}
                    />
                </div>

                <h2 style={{ fontSize: '2rem', marginBottom: 8, fontFamily: INTER_FONT, fontWeight: 700 }}>{event.title}</h2>

                <p
                    style={{
                        fontWeight: 600,
                        marginBottom: 16,
                        color: priceColor,
                        fontSize: '1.1rem',
                        fontFamily: INTER_FONT
                    }}
                >
                    {event.price}
                </p>

                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        textAlign: 'left',
                        maxWidth: '320px',
                        fontFamily: INTER_FONT
                    }}
                >
                    {event.details.map((item, i) => (
                        <li key={i}>
                            <span style={{ color: '#000', marginRight: 8, fontFamily: INTER_FONT }}>•</span>
                            <span style={{ color: '#fff', fontFamily: INTER_FONT }}>{item}</span>
                        </li>
                    ))}
                </ul>

                <div style={{ flexGrow: 1 }} />

                <button
                    style={{
                        padding: '10px 24px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontWeight: 700,
                        fontFamily: INTER_FONT,
                        cursor: 'pointer',
                        transition: 'background 0.3s ease',
                        marginTop: '20px',
                        letterSpacing: 0.3
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                >
                    Reserve Now
                </button>
            </div>

            {/* Fullscreen Image Popup */}
            {showPopup && (
                <div
                    onClick={() => setShowPopup(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        cursor: 'pointer',
                        fontFamily: INTER_FONT
                    }}
                >
                    <img
                        src={event.image}
                        alt="Full screen"
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            borderRadius: '12px',
                            boxShadow: '0 0 20px #000',
                            fontFamily: INTER_FONT
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default PavillionCard;
