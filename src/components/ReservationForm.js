import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';


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

     try {
    const selected = availableVillas.find(v => v.name === formData.villa);

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

    // Optional: Refetch villas after update
    setAvailableVillas(prev => prev.filter(v => v.id !== selected.id));
  } catch (error) {
    console.error('Error submitting reservation:', error);
    setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
  } finally {
    setIsSubmitting(false);
  }
};

  const selectedVilla = availableVillas.find(v => v.name === formData.villa);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-700">Book Your Stay</h2>
      <div className="border border-blue-600 rounded-md overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
          Reservation Details
        </div>

        {submitMessage && (
          <div className={`p-4 ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date *</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date *</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="villa" className="block text-sm font-medium text-gray-700 mb-1">Select Villa *</label>
            <select
              id="villa"
              name="villa"
              value={formData.villa}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select a Villa --</option>
              {availableVillas.map(villa => (
                <option key={villa.id} value={villa.name}>
                  {villa.name} (${villa.price}/night)
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter any special requests here..."
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">
              Total (taxes included):{' '}
              <span className="text-blue-600 text-lg font-bold">
                ${selectedVilla?.price || 0}/night
              </span>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {isSubmitting ? 'Submitting...' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}