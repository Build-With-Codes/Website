'use client'

import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import Link from 'next/link';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 ,background:'transparent'}}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Build with Code
            </Typography>
            <Typography variant="body2">
              Crafting digital experiences and bringing ideas to life through code.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <MuiLink component={Link} href="/" color="inherit" sx={{ mr: 2 }}>
                Home
              </MuiLink>
              <MuiLink component={Link} href="/projects" color="inherit" sx={{ mr: 2 }}>
                Projects
              </MuiLink>
              <MuiLink component={Link} href="/about" color="inherit" sx={{ mr: 2 }}>
                About
              </MuiLink>
              <MuiLink component={Link} href="/contact" color="inherit">
                Contact
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <IconButton color="inherit" component="a" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Build with Code. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            <MuiLink component={Link} href="/privacy-policy" color="inherit">
              Privacy Policy
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

