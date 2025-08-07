import React from "react";

export default function PavillionCard({ event, priceColor, onReserve }) {
    const libreFont = {
        fontFamily: '"Libre Franklin", "Helvetica Neue", Helvetica, Arial, sans-serif'
    };

    return (
        <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "1.5rem",
            width: "100%",
            maxWidth: "360px",
            backdropFilter: "blur(8px)",
            color: "#fff",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...libreFont
        }}>
            <img
                src={event.image}
                alt={event.title}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "1rem"
                }}
            />
            <h3 style={{ 
                marginBottom: "0.5rem", 
                fontSize: "1.25rem", 
                fontWeight: "bold",
                ...libreFont
            }}>
                {event.title}
            </h3>
            <p style={{ 
                color: priceColor, 
                fontWeight: "bold", 
                marginBottom: "0.75rem", 
                ...libreFont 
            }}>
                {event.price}
            </p>
            <ul style={{ 
                listStyleType: "disc", 
                paddingLeft: "1.2rem", 
                marginBottom: "1rem", 
                fontSize: "0.95rem", 
                ...libreFont 
            }}>
                {event.details.map((detail, idx) => (
                    <li key={idx} style={{ marginBottom: "0.4rem", ...libreFont }}>
                        {detail}
                    </li>
                ))}
            </ul>
            <button
                onClick={onReserve}
                style={{
                    marginTop: "auto",
                    padding: "0.6rem 1.2rem",
                    backgroundColor: "#ffffff22",
                    border: "1px solid #ffffff55",
                    color: "#fff",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.2s ease",
                    ...libreFont
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "#ffffff44"}
                onMouseLeave={e => e.target.style.backgroundColor = "#ffffff22"}
            >
                Reserve Now
            </button>
        </div>
    );
}
