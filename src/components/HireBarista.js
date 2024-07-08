import React, { useState } from 'react';
import './HireBarista.css';

const HireBarista = ({ isDarkMode }) => {
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
      console.log(formData); // Replace with your API call or further processing
      clearForm();
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

  return (
    <div className={`hire-barista ${isDarkMode ? 'hire-barista-dark' : ''}`}>
      <h2>Hire a Barista</h2>
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
    </div>
  );
};

export default HireBarista;
