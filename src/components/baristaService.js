import { db } from './firebase';
import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';

// Reference to the barista profiles collection
const baristasCollection = collection(db, 'baristas');

// Create or Update Barista Profile
export const createOrUpdateBarista = async (baristaId, baristaData) => {
  await setDoc(doc(baristasCollection, baristaId), baristaData);
};

// Get All Barista Profiles
export const getBaristas = async () => {
  const snapshot = await getDocs(baristasCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete Barista Profile
export const deleteBarista = async (baristaId) => {
  await deleteDoc(doc(baristasCollection, baristaId));
};
