"use client"
import React, { useState, useEffect } from 'react';
import { Snackbar, Button, Typography, Box } from '@mui/material';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setOpen(false);
    // Here you would typically disable any tracking or analytics
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
    >
      <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.
        </Typography>
        <Button onClick={handleAccept} color="primary" sx={{ mr: 1 }}>
          Accept
        </Button>
        <Button onClick={handleDecline} color="secondary">
          Decline
        </Button>
      </Box>
    </Snackbar>
  );
}

