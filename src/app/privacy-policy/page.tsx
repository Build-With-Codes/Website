'use client'

import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Paper
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center">
              Privacy Policy
            </Typography>
            
            <Typography variant="body1" paragraph>
              Last updated: {currentDate}
            </Typography>

            <Typography variant="body1" paragraph>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit Build with Code (the "Site").
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Personal Information We Collect
            </Typography>

            <Typography variant="body1" paragraph>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              How We Use Your Personal Information
            </Typography>

            <Typography variant="body1" paragraph>
              We use the information that we collect generally to optimize our Site and understand user preferences (for example, by analyzing user behavior and trends). Additionally, we use this information to:
              - Communicate with you;
              - Screen for potential risk or fraud; and
              - Provide you with information or advertising relating to our products or services when in line with the preferences you have shared with us.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Advertising
            </Typography>

            <Typography variant="body1" paragraph>
              We use Google AdSense to serve ads on our Site. Google AdSense uses cookies to personalize ads based on your browsing history and interests. You can learn more about how Google uses your data at https://policies.google.com/technologies/partner-sites.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Your Rights
            </Typography>

            <Typography variant="body1" paragraph>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Changes
            </Typography>

            <Typography variant="body1" paragraph>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Contact Us
            </Typography>

            <Typography variant="body1" paragraph>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [Your Email] or by mail using the details provided below:
            </Typography>

            <Typography variant="body1">
              Build With Code<br />
              Hyderabad<br />
              India
            </Typography>
          </Paper>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

