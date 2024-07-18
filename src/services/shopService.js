import { collection, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure 'db' is correctly imported

const addShop = async (shop) => {
  await addDoc(collection(db, 'shops'), shop);
};

const updateShop = async (shopId, shop) => {
  const shopDoc = doc(db, 'shops', shopId);
  await updateDoc(shopDoc, shop);
};

const getShop = async (shopId) => {
  const shopDoc = doc(db, 'shops', shopId);
  const docSnap = await getDoc(shopDoc);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('Shop not found');
  }
};

const deleteShop = async (shopId) => {
  const shopDoc = doc(db, 'shops', shopId);
  await deleteDoc(shopDoc);
};

export { addShop, updateShop, getShop, deleteShop };
