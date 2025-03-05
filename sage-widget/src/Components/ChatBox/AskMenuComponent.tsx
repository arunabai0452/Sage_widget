import React from 'react';
import { Box, Typography, Button, Grid2 as Grid } from '@mui/material';
import { Help, AttachFile, People, School } from '@mui/icons-material';

interface AskMenuComponentProps {
    showCart: boolean;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleFilePick: () => void;
}

const AskMenuComponent: React.FC<AskMenuComponentProps> = ({ showCart, setInput, handleFilePick }) => {
    return (
        <>
            {showCart && (
                <>
                    {/* Title & Subtitle */}
                    <Box sx={styles.titleContainer}>
                        <Typography sx={styles.title}>I’m COLTIE SAGE</Typography>
                        <Typography sx={styles.subtitle}>
                            Ready to chat? Just type your question and get answers! Need some
                            ideas to get started?
                        </Typography>
                    </Box>

                    {/* 2x2 Button Grid */}
                    <Box sx={styles.gridContainer}>
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid size={{ xs: 6}}>
                                <Button
                                    sx={styles.card}
                                    onClick={() => {
                                        setInput("I want to know more about COLTIE?");
                                    }}
                                >
                                    <Help sx={{ color: 'black', fontSize: 24 }} />
                                    <Typography sx={styles.cardTitle}>Ask a question</Typography>
                                    <Typography sx={styles.cardSubtitle}>
                                        “I want to know more about COLTIE?”
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <Button sx={styles.card} onClick={handleFilePick}>
                                    <AttachFile sx={{ color: 'black', fontSize: 24 }} />
                                    <Typography sx={styles.cardTitle}>Upload a file</Typography>
                                    <Typography sx={styles.cardSubtitle}>
                                        Use the upload button for feedback on your resume.
                                    </Typography>
                                </Button>
                            </Grid>

                            {/* Row 2 */}
                            <Grid size={{ xs: 6 }}>
                                <Button
                                    sx={styles.card}
                                    onClick={() => {
                                        setInput("Find a profile with similar research interests.");
                                    }}
                                >
                                    <People sx={{ color: 'black', fontSize: 24 }} />
                                    <Typography sx={styles.cardTitle}>Get matched</Typography>
                                    <Typography sx={styles.cardSubtitle}>
                                        “Find a profile with similar research interests.”
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid size={{ xs: 6 }}>
                                <Button
                                    sx={[styles.card, styles.highlightedCard]}
                                    onClick={() => {
                                        setInput("What resources are available at my University?");
                                    }}
                                >
                                    <School sx={{ color: 'black', fontSize: 24 }} />
                                    <Typography sx={styles.cardTitle}>Find Support</Typography>
                                    <Typography sx={styles.cardSubtitle}>
                                        “What resources are available at my University?”
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
};

const styles = {
    titleContainer: {
        alignItems: "center",
        paddingHorizontal: 2,
    },
    title: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#868686",
        fontSize: 14,
        textAlign: "center",
        marginTop: 2,
    },
    gridContainer: {
        marginTop: 3,
        paddingHorizontal: 2,
    },
    card: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        minHeight: '200px'
    },
    highlightedCard: {
        borderColor: "#0094FF",
        borderWidth: 1,
    },
    cardTitle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 1,
    },
    cardSubtitle: {
        color: "black",
        fontSize: 12,
        textAlign: "center",
        marginTop: 0.5,
    },
};

export default AskMenuComponent;
