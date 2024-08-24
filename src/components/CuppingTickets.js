import React, { useState } from 'react';
import './CuppingTickets.css';

const events = [
  {
    id: 1,
    image: 'https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1724525386/UEhPVE8tMjAyMy0wOS0yMy0xNi0wNS0xM19oZGFhb3g=/drilldown',
    description: 'Experience the finest coffee from our top roasters.',
  },
  {
    id: 2,
    image: 'https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1695482492/SU1HXzUxMTdfamhmNXhl/template_primary/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=',
    description: 'Join us for a cupping session featuring home brew kits.',
  },
  {
    id: 3,
    image: 'https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1695482492/MzlDNjBDQTctNzUxNC00QTcwLUE3NTEtNjczNUJBQkU3QTRDX21mM25wdQ==/template_primary/d18xMDAwLGFyXzE6MSxjX2ZpbGwsZ19hdXRvLGVfYXJ0Omhva3VzYWk=',
    description: 'Explore new flavors with our exclusive shop.',
  },
  // Add more events as needed
];

const CuppingTickets = () => {
  const [selectedTab, setSelectedTab] = useState('events');

  return (
    <div className="cupping-tickets-page">

      {/* About Our Events Section */}
      <div className="cupping-description">
        <h3>About Our Events</h3>
        <p>
          Discover the world of exceptional coffee with our exclusive coffee cupping events, featuring the finest roasters from around the globe. From the rare Geisha beans to uniquely long-fermented varieties, each session offers a sensory journey into the art and science of coffee. We partner with select coffee shops across London, ensuring a new and exciting venue for every event. For more details and to find the next location, please visit our event page.
        </p>
      </div>

      {/* Combined Events and Registration Card */}
      <div className="events-registration-card">
        <div className="card-tabs">
          <button
            className={`tab-button ${selectedTab === 'events' ? 'active' : ''}`}
            onClick={() => setSelectedTab('events')}
          >
            View Events
          </button>
          <button
            className={`tab-button ${selectedTab === 'register' ? 'active' : ''}`}
            onClick={() => setSelectedTab('register')}
          >
            Register
          </button>
        </div>

        {selectedTab === 'events' && (
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
        )}

        {selectedTab === 'register' && (
          <div className="signup-form">
            <h3>Register for Upcoming Events</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <select>
                {events.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.description}
                  </option>
                ))}
              </select>
              <button type="submit">Register</button>
            </form>

            {/* Venue Information */}
            <div className="venue-info">
              <div className="venue-details">
                <h3>Venue Information</h3>
                <p>123 Coffee St, Brewtown</p>
                <p>Nearby Train Stations: Brewtown Central, Coffee Line</p>
              </div>
              <div className="venue-image">
                <a href="https://venue-website.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://res-console.cloudinary.com/difj9msh3/thumbnails/v1/image/upload/v1698956273/Y2xlbmtlcndlbGxfenJhNWIx/template_primary/Y190aHVtYix3XzIwMCxnX2ZhY2U=" alt="Venue" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuppingTickets;
