import React from 'react';

const PavillionCard = ({ event, priceColor }) => {
    return (
        <div
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.2rem',
                boxShadow: '0 2px 16px #0002',
                padding: '30px 24px',
                width: 360,
                height: 640,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                fontFamily: "'Cormorant Garamond', serif",
                color: '#fff',
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    borderRadius: '0.8rem',
                    marginBottom: 24,
                    transition: 'transform 0.4s ease-in-out'
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <img
                    src={event.image}
                    alt={event.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <h2 style={{ fontSize: '1.9rem', marginBottom: 8 }}>{event.title}</h2>

            <p
                style={{
                    fontWeight: 600,
                    marginBottom: 16,
                    color: priceColor,
                    fontSize: '1.05rem'
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
                    maxWidth: '280px'
                }}
            >
                {event.details.map((item, i) => (
                    <li key={i}>
                        <span style={{ color: '#000', marginRight: 8 }}>•</span>
                        <span style={{ color: '#fff' }}>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Spacer to push button down */}
            <div style={{ flexGrow: 1 }} />

            <button
                style={{
                    padding: '10px 20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    marginTop: '20px'
                }}
                onMouseOver={(e) =>
                    (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
                onMouseOut={(e) =>
                    (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
                Reserve Now
            </button>
        </div>
    );
};

export default PavillionCard;
