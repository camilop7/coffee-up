import React, { useState } from 'react';
import './HireTechnician.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PartnerBanner = () => {
  return (
    <div className="partner-banner">
      <img src="avatar.png" alt="Partner Logo 1" />
      <img src="avatar.png" alt="Partner Logo 2" />
      <img src="avatar.png" alt="Partner Logo 3" />
    </div>
  );
};

const TechnicianProfileCard = ({ technician }) => {
  return (
    <div className="profile-card">
      <div className="avatar">
        <img src={technician.avatar} alt="Technician Avatar" />
      </div>
      <div className="technician-info">
        <h3>{technician.name}</h3>
        <p>{technician.introduction}</p>
      </div>
    </div>
  );
};

const TechnicianBookingForm = ({ handleSubmit, handleChange, formData, formErrors }) => {
  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Hire a Technician</h2>
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

  const [technicians] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'avatar.png',
      introduction: 'Experienced technician with a passion for coffee and customer satisfaction.'
    },
    // Add more technician profiles as needed
  ]);

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
      <PartnerBanner />
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1724172950/c2FucmVtb19rbmlhanVfODQ2ZDE1/drilldown" alt="Carousel 1" />
          <div className="carousel-caption">
            <h2>Our Skilled Technicians</h2>
            <button>Learn More</button>
          </div>
        </div>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1724174235/UEhPVE8tMjAyMy0wOS0yMy0xNi0wNS0xMy00X2c0c2l0bw==/drilldown" alt="Carousel 2" />
          <div className="carousel-caption">
            <h2>Quality Service</h2>
            <button>Contact Us</button>
          </div>
        </div>
        <div>
          <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1694978937/SU1HXzUxMTdfYWdmd3J2/drilldown" alt="Carousel 3" />
          <div className="carousel-caption">
            <h2>Reliable Support</h2>
            <button>Get Started</button>
          </div>
        </div>
      </Carousel>
      <TechnicianBookingForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        formErrors={formErrors}
      />
      <div className="technician-profiles">
        {technicians.map(technician => (
          <TechnicianProfileCard key={technician.id} technician={technician} />
        ))}
      </div>
    </div>
  );
};

export default HireTechnician;
