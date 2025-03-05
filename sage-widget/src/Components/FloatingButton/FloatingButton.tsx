import React from 'react';
import { IconButton } from '@mui/material';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      zIndex: 1000,
    }}>
      <IconButton
        onClick={onClick}
        sx={{
          backgroundColor: 'transparent',
          padding: 0,
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.2)', // Zoom effect on hover
          },
        }}
      >
        <img
          src="/assets/SageButton.svg"
          alt="Chat Button"
          style={{
            width: 60, // Size of the button
            height: 60,
            borderRadius: '50%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </IconButton>
    </div>
  );
};

export default FloatingButton;
