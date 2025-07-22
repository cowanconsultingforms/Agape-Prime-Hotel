import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import './ReservationForm.css';
import coralImage from "../assets/images/coralpicAGAPE.jpg";

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        name: '',
        checkIn: '',
        checkOut: '',
        guests: 2,
        note: '',
        villa: ''
    });

    const [availableVillas, setAvailableVillas] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    useEffect(() => {
        const fetchAvailableVillas = async () => {
            try {
                const q = query(collection(db, 'villas'), where('available', '==', true));
                const snapshot = await getDocs(q);
                const villas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setAvailableVillas(villas);
            } catch (error) {
                console.error('Error fetching villas:', error);
            }
        };

        fetchAvailableVillas();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const selected = availableVillas.find(v => v.name === formData.villa);

            if (!selected) {
                setSubmitMessage({ type: 'error', text: 'Please select a villa.' });
                setIsSubmitting(false);
                return;
            }

            // Add booking document
            await addDoc(collection(db, 'bookings'), {
                ...formData,
                villaId: selected?.id,
                timestamp: new Date()
            });

            // Update villa availability
            const villaRef = doc(db, 'villas', selected.id);
            await updateDoc(villaRef, { available: false });

            setSubmitMessage({ type: 'success', text: 'Reservation submitted successfully!' });
            setFormData({ name: '', checkIn: '', checkOut: '', guests: 2, note: '', villa: '' });

            // Remove villa from list (optional re-fetch)
            setAvailableVillas(prev => prev.filter(v => v.id !== selected.id));
        } catch (error) {
            console.error("Error submitting reservation:", error);
            setSubmitMessage({ type: 'error', text: 'Error submitting reservation. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="reservation-form-container">
            <h2>Book Your Stay</h2>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="reservation-form-top-row">
                    <div className="form-group">
                        <label htmlFor="checkIn">Check-in</label>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkOut">Check-out</label>
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Travelers</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="10"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="name">Guest Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                />

                <label htmlFor="villa">Select Villa</label>
                <select
                    id="villa"
                    name="villa"
                    value={formData.villa}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select a villa</option>
                    {availableVillas.length === 0 ? (
                        <option value="">No villas available</option>
                    ) : (
                        availableVillas.map(v => (
                            <option key={v.id} value={v.name}>{v.name}</option>
                        ))
                    )}
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
                    {isSubmitting ? 'Submitting...' : 'Reserve Now'}
                </button>
            </form>
            {submitMessage && (
                <div style={{
                    marginTop: 12,
                    color: submitMessage.type === 'success' ? '#3eea94' : '#ffa1a1',
                    textAlign: 'center',
                    fontWeight: 600,
                    textShadow: '0 1px 10px rgba(0,0,0,0.15)'
                }}>
                    {submitMessage.text}
                </div>
            )}
        </div>
    );
}
