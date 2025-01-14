"use client";

import React from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  useTheme,
  Fab,
  useMediaQuery,
  keyframes,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RotatingGlobe from "@/app/components/RotatingGlobe";

const scale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background:
          "linear-gradient(45deg,rgb(3, 3, 14) 30%,rgb(81, 73, 117) 90%)",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          padding: theme.spacing(3),
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              py: isMobile ? 8 : 16,
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? "3rem" : "4.5rem",
                fontWeight: "bold",
                marginBottom: theme.spacing(4),
              }}
            >
              Build with Code
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                marginBottom: theme.spacing(6),
              }}
            >
              Crafting Digital Experiences Through Simple Designs
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/projects"
              endIcon={<ArrowForward />}
              sx={{
                position: "relative",

                zIndex: 1000,
                animation: `${scale} 2s ease-in-out infinite`,
                fontSize: "1.2rem",
                padding: "12px 24px",
                borderRadius: "50px",
              }}
            >
              Explore My Work
            </Button>

            <RotatingGlobe />
          </Box>
        </Container>
      </Box>
    
      <Footer />
    </Box>
  );
}
