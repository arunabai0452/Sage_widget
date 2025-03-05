import React, { useState, useEffect } from 'react';
import './Chatbox.css';
import InputContainer from './InputContainer';
import AskMenuComponent from './AskMenuComponent';
import HeaderContent from './HeaderContent';

// Type for a single message
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [showAskMenu, setShowAskMenu] = useState<boolean>(true);

  useEffect(() => {
    if (userInput.trim() === "" && messages.length === 0) {
      setShowAskMenu(true);
    } else {
      setShowAskMenu(false);
    }
  }, [userInput, messages]);

  // Handle message submission
  const handleSendMessage = (message: string): void => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setUserInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbox-wrapper">
      <HeaderContent/>
      <div className="chatbox-body">
          {showAskMenu && (
            <AskMenuComponent
              showCart={showAskMenu}
              setInput={setUserInput}
              handleFilePick={() => console.log('File pick triggered')}
            />
          )}
        <div className="chatbox-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbox-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>

      <div className="chatbox-footer">
        <InputContainer userInput={userInput} setUserInput={setUserInput} handleSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
};

export default Chatbox;
