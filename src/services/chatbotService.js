import { collection, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure 'db' is correctly imported

const addChatbot = async (chatbot) => {
  try {
    await addDoc(collection(db, 'chatbots'), chatbot);
  } catch (e) {
    console.error('Error adding chatbot: ', e);
  }
};

const updateChatbot = async (id, chatbot) => {
  try {
    const chatbotRef = doc(db, 'chatbots', id);
    await updateDoc(chatbotRef, chatbot);
  } catch (e) {
    console.error('Error updating chatbot: ', e);
  }
};

const deleteChatbot = async (id) => {
  try {
    const chatbotRef = doc(db, 'chatbots', id);
    await deleteDoc(chatbotRef);
  } catch (e) {
    console.error('Error deleting chatbot: ', e);
  }
};

const getChatbot = async (id) => {
  try {
    const chatbotRef = doc(db, 'chatbots', id);
    const chatbotSnap = await getDoc(chatbotRef);
    return chatbotSnap.exists() ? chatbotSnap.data() : null;
  } catch (e) {
    console.error('Error getting chatbot: ', e);
  }
};

export { addChatbot, updateChatbot, deleteChatbot, getChatbot };
