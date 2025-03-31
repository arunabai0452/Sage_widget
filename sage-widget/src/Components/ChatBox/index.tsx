import React, { useState, useEffect } from 'react';
import type { JSX } from 'react';
import './Chatbox.css';
import InputContainer from './InputContainer';
import AskMenuComponent from './AskMenuComponent';
import HeaderContent from './HeaderContent';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatboxProps {
  socket: any;
}

const Chatbox: React.FC<ChatboxProps> = ({ socket }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [showAskMenu, setShowAskMenu] = useState<boolean>(true);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false); // 🟢 NEW

  useEffect(() => {
    if (userInput.trim() === "" && messages.length === 0) {
      setShowAskMenu(true);
    } else {
      setShowAskMenu(false);
    }
  }, [userInput, messages]);

  useEffect(() => {
    socket.on('response', (message: string) => {
      setIsBotTyping(false); // 🔴 Stop loading
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'bot' },
      ]);
    });

    return () => {
      socket.off('response');
    };
  }, [socket]);

  const handleSendMessage = (message: string): void => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);
      setUserInput('');
      setIsBotTyping(true); // 🟢 Show loading bubble
      socket.emit('message', message);
    }
  };

  const wrapUrlsWithAnchor = (text: string): string => {
    return text.replace(
      /(?<!["'>])\bhttps?:\/\/[^\s<>"']+/g,
      (url) => `<a href="${url}" target="_blank">${url}</a>`
    );
  };

  const formatBotMessage = (text: string): JSX.Element => {
    let formatted = wrapUrlsWithAnchor(text);
    formatted = formatted.replace(/<b>/g, '\n<b>');
    const lines = formatted.split('\n');

    return (
      <>
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
            {/<\/?[a-z][\s\S]*>/i.test(line.trim()) ? (
              <span dangerouslySetInnerHTML={{ __html: line.trim() }} />
            ) : (
              <span>{line}</span>
            )}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="chatbox-wrapper">
      <HeaderContent />
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
              {message.sender === 'bot'
                ? formatBotMessage(message.text)
                : message.text}
            </div>
          ))}

          {isBotTyping && (
            <div className="chatbox-message bot">
              <span className="typing-indicator">
                🤖 Bot is typing<span className="dot one">.</span><span className="dot two">.</span><span className="dot three">.</span>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="chatbox-footer">
        <InputContainer
          userInput={userInput}
          setUserInput={setUserInput}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Chatbox;
