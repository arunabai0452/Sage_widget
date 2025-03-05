import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Refresh } from "@mui/icons-material";

const HeaderContent: React.FC = () => {

    return (
        <AppBar position="absolute" sx={styles.headerWrapper}>
            {/* Transparent Overlay */}
            <Box sx={styles.headerOverlay} />

            <Toolbar sx={styles.headerContainer}>

                {/* Center - Profile Image & Name */}
                <Box sx={styles.headerTitle}>
                    <img src="/assets/SageButton.svg" alt="Profile" style={styles.profileImage} />
                    <Typography sx={styles.headerText}>COLTIE SAGE</Typography>
                </Box>

                {/* Right - Refresh Button */}
                <IconButton onClick={() => console.log("History/Refresh action")} sx={styles.headerButton}>
                    <Refresh sx={{ color: "white" }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const styles = {
    headerWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    headerOverlay: {
        position: "absolute",
        width: "100%",
        height: 80, // Adjust to fit header height
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        paddingTop: 1, // Space for status bar
        paddingBottom: 1,
    },
    headerTitle: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        marginRight: 8,
    },
    headerText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    headerButton: {
        padding: 1,
    },
};

export default HeaderContent;
