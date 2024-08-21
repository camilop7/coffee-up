import { collection, addDoc, doc, updateDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure 'db' is correctly imported

const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), product);
    return docRef.id;
  } catch (e) {
    console.error('Error adding product: ', e);
  }
};

const updateProduct = async (productId, updatedProduct) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, updatedProduct);
  } catch (e) {
    console.error('Error updating product: ', e);
  }
};

const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
  } catch (e) {
    console.error('Error deleting product: ', e);
  }
};

const getProduct = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);
    return productSnap.exists() ? productSnap.data() : null;
  } catch (e) {
    console.error('Error getting product: ', e);
  }
};

// New function to get all products
const getAllProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    const productList = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productList;
  } catch (e) {
    console.error('Error getting all products: ', e);
    return [];
  }
};

export { addProduct, updateProduct, deleteProduct, getProduct, getAllProducts };
