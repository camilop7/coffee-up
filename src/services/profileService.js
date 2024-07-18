import { collection, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure 'db' is correctly imported

const addProfile = async (profile) => {
  try {
    const docRef = await addDoc(collection(db, 'profiles'), profile);
    return docRef.id;
  } catch (e) {
    console.error('Error adding profile: ', e);
  }
};

const updateProfile = async (profileId, updatedProfile) => {
  try {
    const profileRef = doc(db, 'profiles', profileId);
    await updateDoc(profileRef, updatedProfile);
  } catch (e) {
    console.error('Error updating profile: ', e);
  }
};

const deleteProfile = async (profileId) => {
  try {
    await deleteDoc(doc(db, 'profiles', profileId));
  } catch (e) {
    console.error('Error deleting profile: ', e);
  }
};

const getProfile = async (profileId) => {
  try {
    const profileRef = doc(db, 'profiles', profileId);
    const profileSnap = await getDoc(profileRef);
    return profileSnap.exists() ? profileSnap.data() : null;
  } catch (e) {
    console.error('Error getting profile: ', e);
  }
};

export { addProfile, updateProfile, deleteProfile, getProfile };
