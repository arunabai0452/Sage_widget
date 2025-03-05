import React from 'react';
import { Button, Box } from '@mui/material';

interface SuggestionsProps {
    suggestions: string[];
    handleSendMessage: (message: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, handleSendMessage }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 80,
                display: 'flex',
                gap: 1,
                overflowX: 'auto',
                alignItems: 'center',
                width: '100%',
            }}
        >
            {suggestions.map((item) => (
                <Button
                    key={item}
                    variant="contained"
                    onClick={() => handleSendMessage(item)}
                    sx={{
                        backgroundColor: '#fff',
                        color: '#000',
                        marginBottom: '1px',
                        marginLeft: '1px',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#f0f0f0',
                        },
                    }}
                >
                    {item}
                </Button>
            ))}
        </Box>
    );
};

export default Suggestions;
