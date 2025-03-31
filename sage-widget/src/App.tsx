import React, { useState } from 'react';
import './App.css';
import Chatbox from './Components/ChatBox';  // Make sure the path is correct
import FloatingButton from './Components/FloatingButton/FloatingButton';
import io from 'socket.io-client';


const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const socket = io('http://localhost:5001');

  // Toggle chatbox visibility
  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
        This is Your Website
        <FloatingButton onClick={toggleChatbox} />
        {isChatOpen && <Chatbox socket={socket}/>}
    </div>
  );
};

export default App;
