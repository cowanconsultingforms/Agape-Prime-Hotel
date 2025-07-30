import React, { useState } from "react";
import "./ReservationForm.css";

const wellnessOptions = [
    "Massages",
    "Head Spa",
    "Facials",
    "Body Treatments",
    "Scrubs",
    "Express Treatments",
    "Bath/Sauna Rental",
];

export default function WellnessReservationForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        wellnessType: "",
        note: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        setTimeout(() => {
            setSubmitMessage({ type: "success", text: "Wellness reservation submitted!" });
            setFormData({ name: "", age: "", wellnessType: "", note: "" });
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: -2,
                }}
            >
                <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
            </video>

            <div className="reservation-form-container wellness">
                <h2>Wellness Reservation</h2>
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Your Age"
                        value={formData.age}
                        onChange={handleChange}
                        min={1}
                        required
                    />

                    <label htmlFor="wellnessType">Type of Wellness</label>
                    <select
                        id="wellnessType"
                        name="wellnessType"
                        value={formData.wellnessType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select type...</option>
                        {wellnessOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    <label htmlFor="note">Special Requests</label>
                    <textarea
                        id="note"
                        name="note"
                        placeholder="Add any special requests (optional)"
                        value={formData.note}
                        onChange={handleChange}
                        rows={3}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Reserve Now"}
                    </button>
                </form>
                {submitMessage && (
                    <div style={{
                        marginTop: 12,
                        color: submitMessage.type === "success" ? "#3eea94" : "#ffa1a1",
                        textAlign: "center",
                        fontWeight: 600,
                        textShadow: "0 1px 10px rgba(0,0,0,0.15)",
                    }}>
                        {submitMessage.text}
                    </div>
                )}
            </div>
        </div>
    );
}
