import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    
    const currentYear = new Date().getFullYear();


  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Build with Code. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <MuiLink component={Link} href="/about" color="inherit" sx={{ mr: 2 }}>
              About
            </MuiLink>
            <MuiLink component={Link} href="/contact" color="inherit" sx={{ mr: 2 }}>
              Contact
            </MuiLink>
            <MuiLink component={Link} href="/privacy-policy" color="inherit">
              Privacy Policy
            </MuiLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

