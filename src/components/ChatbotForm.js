// src/components/ChatbotForm.js
import React, { useState, useEffect } from 'react';
import { addChatbot, updateChatbot, getChatbot, deleteChatbot } from '../services/chatbotService';


const ChatbotForm = ({ chatbotId }) => {
  const [chatbot, setChatbot] = useState({ context: '', response: '', timestamp: '' });

  const handleChange = (e) => {
    setChatbot({ ...chatbot, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chatbotId) {
      await updateChatbot(chatbotId, chatbot);
    } else {
      await addChatbot(chatbot);
    }
  };

  const handleDelete = async () => {
    if (chatbotId) {
      await deleteChatbot(chatbotId);
    }
  };

  const fetchChatbot = async () => {
    if (chatbotId) {
      const fetchedChatbot = await getChatbot(chatbotId);
      setChatbot(fetchedChatbot);
    }
  };

  useEffect(() => {
    fetchChatbot();
  }, [chatbotId]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="context" value={chatbot.context} onChange={handleChange} placeholder="Context" />
      <input type="text" name="response" value={chatbot.response} onChange={handleChange} placeholder="Response" />
      <input type="text" name="timestamp" value={chatbot.timestamp} onChange={handleChange} placeholder="Timestamp" />
      <button type="submit">Save</button>
      {chatbotId && <button type="button" onClick={handleDelete}>Delete</button>}
    </form>
  );
};

export default ChatbotForm;
