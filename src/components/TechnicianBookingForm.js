// TechnicianBookingForm.js

import React, { useState } from 'react';
import AvailabilityCalendar from './AvailabilityCalendar'; // Assuming you have this component
import './TechnicianBookingForm.css'; // Example CSS file for styling

const TechnicianBookingForm = ({ technician }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: ''
  });

  const [bookingResult, setBookingResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call function to check availability
    const isAvailable = checkAvailability(formData.date, formData.time);
    if (isAvailable) {
      setBookingResult(`Booking confirmed with ${technician.name} on ${formData.date} at ${formData.time}`);
    } else {
      setBookingResult(`We are sorry, ${technician.name} is not available on ${formData.date}. Please send us an email.`);
    }
    clearForm();
  };

  const checkAvailability = (date, time) => {
    // Implement availability check logic here, e.g., check a database or API
    // For now, let's assume it always returns true
    return true;
  };

  const clearForm = () => {
    setFormData({
      date: '',
      time: ''
    });
    setBookingResult(null);
  };

  return (
    <div className="technician-booking-form">
      <h2>Book a Technician</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Technician</button>
      </form>
      {bookingResult && <p className="booking-result">{bookingResult}</p>}
      <AvailabilityCalendar technician={technician} />
    </div>
  );
};

export default TechnicianBookingForm;
