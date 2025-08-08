import React, { useEffect, useState } from "react";
import "../css/ReservationForm.css";
import { collection, getDocs} from "firebase/firestore";
import { db } from '../config/firebase';

const pavilionOptions = [
    { label: "Legacy Lounge: Baldwin & Bubbles — $100+ PER PERSON", value: "Legacy Lounge: Baldwin & Bubbles", guests: 6},
    { label: "Civic Spirit: Hamilton Pour — $110+ PER PERSON", value: "Civic Spirit: Hamilton Pour" },
    { label: "Island Revival: Garifuna Gold — $125+ PER PERSON", value: "Island Revival: Garifuna Gold" },
    { label: "Prime Roots: Agape Garden Table — $135+ PER PERSON", value: "Prime Roots: Agape Garden Table" },
    { label: "The American Dream: Tubman — $150+ PER PERSON", value: "The American Dream: Tubman" },
    { label: "Liberation Fire: Maroon Feast — $160+ PER PERSON", value: "Liberation Fire: Maroon Feast" },
];



export default function PBPavilionReservationForm() {



  useEffect(() => {
  const fetchExperiences = async () => {
    const querySnapshot = await getDocs(collection(db, "pavilionExperiences"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  fetchExperiences(); // Call the async function
}, []);

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        guests: 2,
        experience: "",
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
            setSubmitMessage({ type: "success", text: "PB Pavilion reservation submitted!" });
            setFormData({ name: "", date: "", guests: 2, experience: "", note: "" });
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

            <div className="reservation-form-container pavilion">
                <h2>PB Pavilion Reservation</h2>
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

                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="guests">Number of Guests</label>
                    <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        max={20}
                        value={formData.guests}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="experience">Pavilion Experience</label>
                    <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select an experience...</option>
                        {pavilionOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
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
