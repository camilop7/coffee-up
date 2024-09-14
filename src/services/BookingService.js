import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// Add a booking for Barista
const addBaristaBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, 'baristaBookings'), bookingData);
    return docRef.id;
  } catch (e) {
    console.error('Error adding barista booking: ', e);
  }
};

// Get all Barista bookings
const getBaristaBookings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'baristaBookings'));
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ ...doc.data(), id: doc.id });
    });
    return bookings;
  } catch (e) {
    console.error('Error getting barista bookings: ', e);
  }
};

// Similar function for Technician bookings
const addTechnicianBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, 'technicianBookings'), bookingData);
    return docRef.id;
  } catch (e) {
    console.error('Error adding technician booking: ', e);
  }
};

const getTechnicianBookings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'technicianBookings'));
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ ...doc.data(), id: doc.id });
    });
    return bookings;
  } catch (e) {
    console.error('Error getting technician bookings: ', e);
  }
};

export { addBaristaBooking, getBaristaBookings, addTechnicianBooking, getTechnicianBookings };
