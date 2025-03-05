import React, { useState } from 'react';
import './App.css';
import Chatbox from './Components/ChatBox';  // Make sure the path is correct
import FloatingButton from './Components/FloatingButton/FloatingButton';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // Toggle chatbox visibility
  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
        <FloatingButton onClick={toggleChatbox} />
        {isChatOpen && <Chatbox />}
    </div>
  );
};

export default App;
