import React, { useState } from 'react';
import { Chatbot, Loading } from 'react-chatbot-kit';
import '../css/Chatbot.css';

const SpoonacularChatbot = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const mockApiResponse = {
    answerText: "Sorry, I don't know what to say to that.",
    media: []
  };
//   const config = {
//     // Your config options for react-chatbot-kit (not required for this example)
//   };
  
  const handleOnSubmit = async () => {
    const apiKey = '40e34375ddaa4e3abdc1e21fa4aabd61';
    const apiUrl = `https://api.spoonacular.com/food/converse?text=${encodeURIComponent(inputText)}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        setChatHistory([...chatHistory, { user: inputText }, { bot: result.answerText }]);
        setInputText('');
      } else {
        console.error('Failed to fetch data. Status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setChatHistory([...chatHistory, { role: 'user', text: inputText }]);
    setChatHistory([...chatHistory, { role: 'bot', text: mockApiResponse.answerText }]);
  };
  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}>
            {message.role === 'user' && <div className="user-message">{message.text}</div>}
            {message.role === 'bot' && <div className="bot-message">{message.text}</div>}
          </div>
        ))}
      </div>
      <Chatbot
        messageParser={(text) => text}
        onSubmit={handleOnSubmit}
        loadingComponent={<Loading />}
      />
    </div>
  );
};

export default SpoonacularChatbot;
