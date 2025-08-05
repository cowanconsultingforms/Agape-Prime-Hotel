import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    TextField
} from "@mui/material";
import { motion } from "framer-motion";

// Images
import massageImg from "../assets/images/rewards-images/massageback.jpg";
import headSpaImg from "../assets/images/rewards-images/headspa.png";
import facialsImg from "../assets/images/rewards-images/facialsImg.jpg";
import bodyTreatmentImg from "../assets/images/rewards-images/blackrockonback.jpg";
import scrubImg from "../assets/images/rewards-images/scrub.webp";
import expressImg from "../assets/images/rewards-images/expressImg.jpg";
import bathSaunaImg from "../assets/images/rewards-images/lemonsonwater.jpg";
import agapePoolImg from "../assets/images/rewards-images/agapepool.jpg";

const rewards = [
    { name: "Massages", img: massageImg, cost: 150 },
    { name: "Head Spa", img: headSpaImg, cost: 150 },
    { name: "Facials", img: facialsImg, cost: 150 },
    { name: "Body Treatments", img: bodyTreatmentImg, cost: 250 },
    { name: "Scrubs", img: scrubImg, cost: 250 },
    { name: "Express Treatments", img: expressImg, cost: 300 },
    { name: "Bath/Sauna Rental", img: bathSaunaImg, cost: 400 },
    { name: "Agape Pool Experience", img: agapePoolImg, cost: 500 }
];

export default function Points() {
    const [points, setPoints] = useState(0);
    const [selectedReward, setSelectedReward] = useState(null);

    const handleRedeem = (reward) => {
        if (points >= reward.cost) {
            setSelectedReward(reward);
        } else {
            alert("Not enough points to redeem this reward.");
        }
    };

    const confirmRedeem = () => {
        if (selectedReward) {
            setPoints(points - selectedReward.cost);
            setSelectedReward(null);
        }
    };

    return (
        <div style={{ position: "relative", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }}
            >
                <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
            </video>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    paddingTop: "80px",
                }}
            >
                <Box
                    sx={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderRadius: "20px",
                        padding: "40px 30px",
                        width: "90%",
                        maxWidth: "700px",
                        color: "white",
                        textAlign: "center",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        Your Rewards Progress
                    </Typography>
                    <Typography sx={{ color: "#eee", marginBottom: "30px" }}>
                        Earn points and unlock rewards. 1000 points = free luxury experience.
                    </Typography>

                    <Box sx={{ position: "relative", marginBottom: 4, height: "32px" }}>
                        <div
                            style={{
                                width: "100%",
                                height: "20px",
                                backgroundColor: "rgba(255, 255, 255, 0.25)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: "999px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: `${(points / 1000) * 100}%`,
                                    backgroundColor: "#00bfff",
                                    transition: "width 0.3s ease-in-out",
                                }}
                            />
                        </div>
                        {[...Array(11)].map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: `${(i * 100) / 10}%`,
                                    transform: "translateX(-50%)",
                                    top: "28px",
                                    color: "#fff",
                                    fontSize: "14px"
                                }}
                            >
                                {i * 100}
                            </span>
                        ))}
                    </Box>

                    <TextField
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 2,
                            width: "100px",
                            input: { textAlign: "center" },
                            marginBottom: "30px",
                        }}
                    />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: 2,
                        }}
                    >
                        {rewards.map((reward, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Card
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "12px",
                                        borderRadius: "15px",
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(6px)",
                                        color: "#fff",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <CardMedia
                                            component="img"
                                            image={reward.img}
                                            alt={reward.name}
                                            sx={{ width: 60, height: 60, borderRadius: "10px", marginRight: 2, objectFit: "cover" }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {reward.name}
                                            </Typography>
                                            <Typography variant="caption">Wellness reward</Typography>
                                        </Box>
                                    </Box>
                                    <Button
                                        onClick={() => handleRedeem(reward)}
                                        sx={{
                                            backgroundColor: points >= reward.cost ? "#fff" : "#999",
                                            color: "#000",
                                            borderRadius: "999px",
                                            fontWeight: 600,
                                            px: 2,
                                            py: 0.5,
                                            textTransform: "none",
                                        }}
                                        disabled={points < reward.cost}
                                    >
                                        {reward.cost}
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Dialog
                open={!!selectedReward}
                onClose={() => setSelectedReward(null)}
            >
                <DialogTitle>
                    Confirm redemption for {selectedReward?.name} ({selectedReward?.cost} points)?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setSelectedReward(null)}>Cancel</Button>
                    <Button onClick={confirmRedeem} color="primary" variant="contained">
                        Redeem
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
