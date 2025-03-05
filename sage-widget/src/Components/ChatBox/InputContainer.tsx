import React, { useState } from 'react';
import { Button, TextField, IconButton, Box } from '@mui/material';
import { Add, Send } from '@mui/icons-material';
import Suggestions from './SuggestionBox';

interface InputContainerProps {
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    userInput: string;
    handleSendMessage: (message: string) => void;
}

const InputContainer: React.FC<InputContainerProps> = ({ setUserInput, userInput, handleSendMessage }) => {

    const handleFilePick = () => {
        // Handle file selection logic here
        console.log('File pick triggered');
    };


    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, backgroundColor: '#f1f1f1' }}>

            {/* Suggestions */}
            <Suggestions
                suggestions={['Hello', 'How are you?', 'Good morning']}
                handleSendMessage={handleSendMessage}
            />

            {/* Attachment Button */}
            <IconButton sx={{
                top: 10,
                padding: 0,
                }} color="primary" onClick={handleFilePick}>
                <Add sx={{
                    color: "white",
                    borderRadius: 20,
                    width: 35,
                    height: 35,
                    backgroundColor: "#D81B60",
                    alignItems: "center",
                    justifyContent: "center",
                }} />
            </IconButton>

            {/* Rounded Text Input */}
            <TextField
                variant="outlined"
                placeholder="Start typing..."
                value={userInput}
                size='small'
                fullWidth
                onChange={(e) => setUserInput(e.target.value)}
                sx={{
                    flexGrow: 1,
                    marginLeft: 1,
                    marginTop: 3,
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                    },
                }}
            />
            <IconButton
                size='small'
                sx={{
                    padding: 0,
                    top: 10,
                }}
                onClick={()=>handleSendMessage(userInput)} >
            <Send sx={{
                color: "#D81B60",
                width: 40,
                marginLeft: 1,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
            }} />
            </IconButton>
        </Box>
    );
};

export default InputContainer;
