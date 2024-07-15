import React from 'react';
import Calendar from 'react-calendar';
import './AvailabilityCalendar.css';

const AvailabilityCalendar = ({ availability }) => {
  return (
    <div className="availability-calendar">
      <h3>Availability</h3>
      <Calendar
        className="custom-calendar"
        tileClassName={({ date }) => {
          const availabilityDate = availability.find(avail => avail.date === date.toISOString().split('T')[0]);
          return availabilityDate ? `available-${availabilityDate.color}` : null;
        }}
      />
    </div>
  );
};

export default AvailabilityCalendar;
