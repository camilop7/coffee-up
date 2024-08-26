import React, { useState } from 'react';
import { auth, db } from '../firebase'; // Ensure you have the correct path to firebase
import { collection, addDoc } from 'firebase/firestore';
import './HireBarista.css';
import BaristaProfileCard from './BaristaProfileCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

const HireBarista = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    startTime: '',
    endTime: '',
    hourlyRate: '13'
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    date: '',
    startTime: '',
    endTime: '',
    hourlyRate: ''
  });

  const [baristas] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'avatar.png',
      introduction: 'Meet Alex, our incredibly talented barista with years of experience crafting exceptional coffee in the bustling coffee scenes of New York and London...',
      availability: [
        { date: '2024-08-01', color: 'blue' },
        { date: '2024-08-05', color: 'green' }
      ]
    },
    // Add more barista profiles as needed
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const docRef = await addDoc(collection(db, 'baristaBookings'), formData);
        console.log('Document written with ID: ', docRef.id);
        clearForm();
      } catch (e) {
        console.error('Error adding document: ', e);
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
      startTime: '',
      endTime: '',
      hourlyRate: ''
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

    if (!formData.startTime.trim()) {
      errors.startTime = 'Start time is required';
      valid = false;
    }

    if (!formData.endTime.trim()) {
      errors.endTime = 'End time is required';
      valid = false;
    }

    if (!formData.hourlyRate.trim() || isNaN(formData.hourlyRate) || formData.hourlyRate < 13) {
      errors.hourlyRate = 'Hourly rate must be at least £13';
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
      startTime: '',
      endTime: '',
      hourlyRate: '13'
    });
    setFormErrors({
      name: '',
      email: '',
      date: '',
      startTime: '',
      endTime: '',
      hourlyRate: ''
    });
  };

  return (
    <div className={`hire-barista ${isDarkMode ? 'hire-barista-dark' : ''}`}>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1695482490/SU1HXzM3MjNfYXVwcmxr/drilldown" alt="Carousel 1" />
        </div>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1698955116/a2F3YV9heThlZ2Y=/drilldown" alt="Carousel 2" />
        </div>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1724527572/cGFpbmF1Y195NnZqeXQ=/template_primary/d18xMDAwLGFyXzE2OjksY19maWxsLGdfYXV0byxlX3NoYXJwZW4=" alt="Carousel 3" />
        </div>
      </Carousel>

      <div className="description-card">
        <h2>Our Barista Culture</h2>
        <p>
          We pride ourselves on delivering an unparalleled coffee experience...
        </p>
      </div>

      <div className="barista-profiles">
        {baristas.map(barista => (
          <BaristaProfileCard key={barista.id} barista={barista} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form-card">
        <h2>Hire a Barista</h2>
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
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className={formErrors.startTime ? 'error' : ''}
          />
          {formErrors.startTime && <span className="error-message">{formErrors.startTime}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className={formErrors.endTime ? 'error' : ''}
          />
          {formErrors.endTime && <span className="error-message">{formErrors.endTime}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="hourlyRate">Hourly Rate (£):</label>
          <input
            type="number"
            id="hourlyRate"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            className={formErrors.hourlyRate ? 'error' : ''}
          />
          {formErrors.hourlyRate && <span className="error-message">{formErrors.hourlyRate}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HireBarista;
