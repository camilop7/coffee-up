// HireTechnician.js
import React, { useState } from 'react';
import './HireTechnician.css';

// Technician Profile Card component
const TechnicianProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="avatar">
        {/* Placeholder for avatar */}
        <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1695482480/SU1HXzA0MjVfeHRiZmF2/drilldown" alt="Technician Avatar" />
      </div>
      <div className="technician-info">
        <h3>John Doe</h3>
        <p>Experienced technician with a passion for coffee and customer satisfaction.</p>
      </div>
    </div>
  );
};

// Technician Booking Form component
const TechnicianBookingForm = ({ handleSubmit, handleChange, formData, formErrors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? 'error' : ''}
        />
        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'error' : ''}
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={formErrors.date ? 'error' : ''}
        />
        {formErrors.date && <span className="error-message">{formErrors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={formErrors.time ? 'error' : ''}
        />
        {formErrors.time && <span className="error-message">{formErrors.time}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const HireTechnician = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate booking confirmation logic
      const isAvailable = checkAvailability(formData.date);
      if (isAvailable) {
        console.log('Booking confirmed:', formData); // Replace with your API call or further processing
        clearForm();
      } else {
        console.error('No technicians available on the date requested.');
        alert('We are sorry, but there are no technicians available on the date you requested. Please send us an email with your inquiries, and we will try to allocate the next available technician to your store.');
      }
    } else {
      console.error('Form submission aborted due to validation errors.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      date: '',
      time: ''
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.date.trim()) {
      errors.date = 'Date is required';
      valid = false;
    }

    if (!formData.time.trim()) {
      errors.time = 'Time is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      date: '',
      time: ''
    });
    setFormErrors({
      name: '',
      email: '',
      date: '',
      time: ''
    });
  };

  const checkAvailability = (date) => {
    // Simulate availability check
    // Replace with actual logic to check technician's schedule
    // For demonstration, return true if date is not empty
    return !!date; // Change this condition based on your actual availability logic
  };

  return (
    <div className={`hire-technician ${isDarkMode ? 'hire-technician-dark' : ''}`}>
      <h2>Hire a Technician</h2>

      {/* Render Technician Profile Card */}
      <TechnicianProfileCard />

      {/* Render Technician Booking Form */}
      <TechnicianBookingForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        formErrors={formErrors}
      />
    </div>
  );
};

export default HireTechnician;
