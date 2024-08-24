import React, { useState } from 'react';
import './HireBarista.css';
import BaristaProfileCard from './BaristaProfileCard';
import ShopReviewCard from './ShopReviewCard';
import AvailabilityCalendar from './AvailabilityCalendar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

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
      avatar: 'avatar.png',
      introduction: 'Meet Alex, our incredibly talented barista with years of experience crafting exceptional coffee in the bustling coffee scenes of New York and London. With a deep love for the art of brewing, Alex brings a wealth of knowledge and a keen eye for detail to every cup. Whether you are after a perfectly balanced espresso or a smooth, velvety flat white, Alex is here to make your coffee experience truly unforgettable. Come say hi and let Alex create your new favorite coffee!',
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
      images: ['https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1698956273/Y2xlbmtlcndlbGxfenJhNWIx/drilldown', 'shop1b.jpg', 'shop1c.jpg'],
      locationLink: 'https://maps.google.com/',
      review: 'Great atmosphere and excellent coffee.'
    },
    {
      id: 2,
      images: ['https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1698956273/Y2xlbmtlcndlbGxfenJhNWIx/drilldown', 'shop2b.jpg', 'shop2c.jpg'],
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
        We pride ourselves on delivering an unparalleled coffee experience that has been finely honed over years of expertise in some of the world's most vibrant coffee cities. Our highly skilled baristas are true artisans, with a deep passion for crafting the perfect cup just for you. Whether you’re a fan of a classic espresso, a meticulously brewed V60 pour-over, or an innovative AeroPress extraction, we have the perfect brew to satisfy your coffee cravings. We offer a wide array of services, from intricate latte art that turns your coffee into a canvas, to custom coffee blends that are tailored to your unique taste preferences. Our commitment to quality and our mastery of the latest coffee brewing techniques ensure that every sip you take is an experience in itself. Come in and discover why we are the go-to destination for coffee lovers in search of perfection.
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
        <ErrorBoundary>
          <ShopReviewCard shops={shops} />
        </ErrorBoundary>
      </div>

      <AvailabilityCalendar availability={baristas.reduce((acc, curr) => [...acc, ...curr.availability], [])} />
    </div>
  );
};

export default HireBarista;
