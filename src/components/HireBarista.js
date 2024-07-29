import React, { useState } from 'react';
import './HireBarista.css';
import BaristaProfileCard from './BaristaProfileCard';
import ShopReviewCard from './ShopReviewCard';
import AvailabilityCalendar from './AvailabilityCalendar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

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

  const [baristas] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'avatar.jpg',
      introduction: 'Experienced barista with a passion for latte art.',
      availability: [
        { date: '2024-08-01', color: 'blue' },
        { date: '2024-08-05', color: 'green' }
      ]
    },
    // Add more barista profiles as needed
  ]);

  const [shops] = useState([
    {
      id: 1,
      images: ['shop1a.jpg', 'shop1b.jpg', 'shop1c.jpg'],
      locationLink: 'https://maps.google.com/',
      review: 'Great atmosphere and excellent coffee.'
    },
    {
      id: 2,
      images: ['shop2a.jpg', 'shop2b.jpg', 'shop2c.jpg'],
      locationLink: 'https://maps.google.com/',
      review: 'Cozy place with a fantastic selection of pastries.'
    },
    // Add more shop reviews as needed
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
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="carousel1.jpg" alt="Carousel 1" />
        </div>
        <div>
          <img src="carousel2.jpg" alt="Carousel 2" />
        </div>
        <div>
          <img src="carousel3.jpg" alt="Carousel 3" />
        </div>
      </Carousel>

      <div className="description-card">
        <h2>Our Barista Culture</h2>
        <p>
          At our coffee shop, we pride ourselves on delivering the best coffee experience. Our baristas are skilled artisans, passionate about creating the perfect cup of coffee for you. We offer a range of services, including latte art, custom coffee blends, and more.
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

      <div className="shop-reviews">
        {shops.map(shop => (
          <ShopReviewCard key={shop.id} shop={shop} />
        ))}
      </div>

      <AvailabilityCalendar availability={baristas.reduce((acc, curr) => [...acc, ...curr.availability], [])} />
    </div>
  );
};

export default HireBarista;
