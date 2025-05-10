import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SelfImprovement, FitnessCenter, Psychology, TheaterComedy } from "@mui/icons-material";
import "../CopingStrategies.css";

const categories = [
  {
    label: "Emotional",
    icon: <SelfImprovement color="primary" />,
    bgColor: "#FDEDEC",
    strategies: [
      { name: "Practicing Gratitude", description: "Focus on positive aspects of life to improve emotional well-being.", img: "/gratitude.jpg" },
      { name: "Journaling Emotions", description: "Write your feelings to gain clarity and reduce stress.", img: "/journaling.jpg" },
      { name: "Talking to a Friend or Therapist", description: "Sharing your thoughts helps process emotions.", img: "/talking.jpg" },
      { name: "Listening to Music", description: "Music can uplift mood and promote relaxation.", img: "/music.jpg" },
      { name: "Art Therapy", description: "Express emotions creatively through drawing or painting.", img: "/art.jpg" },
    ],
  },
  {
    label: "Physical",
    icon: <FitnessCenter color="secondary" />,
    bgColor: "#E8F8F5",
    strategies: [
      { name: "Deep Breathing Exercises", description: "Breathe slowly to calm the nervous system and promote relaxation", img: "/breathing.jpg" },
      { name: "Progressive Muscle Relaxation", description: "Tense and release muscles to reduce tension.", img: "/muscle.jpg" },
      { name: "Walking or Exercising", description: "Physical activity releases endorphins and reduces stress.", img: "/walking.jpg" },
      { name: "Yoga or Stretching", description: "Combines movement and mindfulness for relaxation.", img: "/yoga.jpg" },
      { name: "Dancing or Physical Movement", description: "Releases pent-up energy and improves mood.", img: "/dancing.jpg" },
    ],
  },
  {
    label: "Cognitive",
    icon: <Psychology color="success" />,
    bgColor: "#FEF9E7",
    strategies: [
      { name: "Positive Affirmations", description: "Replace negative thoughts with empowering statements.", img: "/affirmations.jpg" },
      { name: "Challenging Negative Thoughts", description: "Reframe pessimistic thoughts to build resilience.", img: "/challenging.jpg" },
      { name: "Mindfulness & Meditation", description: "Stay present and reduce anxiety through meditation.", img: "/meditation.jpg" },
      { name: "Reframing Situations", description: "Look at challenges from a different perspective.", img: "/reframing.jpg" },
      { name: "Limiting Social Media", description: "Reduce exposure to negative news and distractions.", img: "/socialmedia.jpg" },
    ],
  },
  {
    label: "Behavioral",
    icon: <TheaterComedy color="error" />,
    bgColor: "#EBF5FB",
    strategies: [
      { name: "Engaging in a Hobby", description: "Do something you love to boost mood and creativity.", img: "/hobby.jpg" },
      { name: "Creating a Daily Routine", description: "Structure your day for stability and productivity.", img: "/routine.jpg" },
      { name: "Breaking into Smaller Steps", description: "Avoid overwhelm by handling tasks gradually.", img: "/tasks.jpg" },
      { name: "Spending Time in Nature", description: "Connect with nature to refresh your mind and body.", img: "/nature.jpg" },
      { name: "Helping Others", description: "Acts of kindness enhance happiness and fulfillment.", img: "/helping.jpg" },
    ],
  },
];

export default function CopingStrategies() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="animated-bg" sx={{ p: 4, textAlign: "center", minHeight: "100vh" }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif", mb: 2, color: "white" }}>
          🌿 Coping Strategies
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "Source Sans Pro, sans-serif", mb: 3, color: "white" }}>
          Manage stress and build resilience with effective techniques.
        </Typography>
      </motion.div>

      <Tabs
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3, bgcolor: "rgba(255, 255, 255, 0.2)", borderRadius: 2, backdropFilter: "blur(8px)" }}
      >
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category.label}
            icon={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  p: 1,
                }}
              >
                {category.icon}
              </Box>
            }
            sx={{ color: "white" }}
          />
        ))}
      </Tabs>

      <Grid container spacing={3} justifyContent="center">
        {categories[activeTab].strategies.map((strategy, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: categories[activeTab].bgColor,
                  borderRadius: 3,
                  textAlign: "center",
                  maxWidth: 320,
                  mx: "auto",
                  p: 2,
                  boxShadow: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={strategy.img}
                  alt={strategy.name}
                  sx={{ borderRadius: 2, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ fontFamily: "Poppins, sans-serif", mb: 1 }}
                  >
                    {strategy.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Source Sans Pro", color: "text.secondary" }}>
                    {strategy.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
