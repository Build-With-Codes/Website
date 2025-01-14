'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Settings, Build } from '@mui/icons-material';

interface UnderDevelopmentProps {
  message?: string;
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({ 
  message = "This page is currently under construction. We're working hard to bring you something amazing!" 
}) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Box sx={{ position: 'relative', width: 120, height: 120, mb: 4 }}>
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Settings sx={{ fontSize: 120, color: 'primary.main' }} />
          </motion.div>
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: [-10, 10] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Build sx={{ fontSize: 60, color: 'secondary.main' }} />
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Under Development
          </Typography>
          <Typography variant="body1">
            {message}
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default UnderDevelopment;

