import React from 'react';
import './CuppingTickets.css';

const events = [
  {
    id: 1,
    image: '/path-to-event1.jpg',
    description: 'Experience the finest coffee from our top roasters.',
  },
  {
    id: 2,
    image: '/path-to-event2.jpg',
    description: 'Join us for a cupping session featuring home brew kits.',
  },
  {
    id: 3,
    image: '/path-to-event3.jpg',
    description: 'Explore new flavors with our exclusive shop gift vouchers.',
  },
  // Add more events as needed
];

const CuppingTickets = () => (
  <div className="cupping-tickets-page">
    <div className="tickets-list">
      {events.map(event => (
        <div key={event.id} className="ticket-card">
          <div className="card-image">
            <img src={event.image} alt={`Event ${event.id}`} />
            <div className="card-description">{event.description}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="signup-form">
      <h3>Sign Up for Upcoming Events</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>

    <div className="cupping-description">
      <h3>About Our Cupping Events</h3>
      <p>
        Discover the world of coffee with our expert-led cupping sessions. We
        feature a variety of products, including:
      </p>
      <ul>
        <li>Last roasters’ selections</li>
        <li>Home brew kits</li>
        <li>Shop gift vouchers</li>
      </ul>
    </div>

    <div className="venue-info">
      <div className="venue-image">
        <a href="https://venue-website.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-venue.jpg" alt="Venue" />
        </a>
      </div>
      <div className="venue-details">
        <h3>Venue Information</h3>
        <p>123 Coffee St, Brewtown</p>
        <p>Nearby Train Stations: Brewtown Central, Coffee Line</p>
      </div>
    </div>
  </div>
);

export default CuppingTickets;
