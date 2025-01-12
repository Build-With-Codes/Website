'use client'

import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
 
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Code, Dataset, Palette } from '@mui/icons-material';
import Link from 'next/link';
import Footer from './components/Footer';

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Build with Code
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Build with Code
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Your one-stop resource for frontend, backend, and monetization
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Featured Projects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard 
                  title="Frontend Designs" 
                  description="Explore our collection of responsive and modern UI designs."
                  icon={<Palette />}
                  link="/frontend"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard 
                  title="Backend Solutions" 
                  description="Discover robust server-side implementations and APIs."
                  icon={<Dataset />}
                  link="/backend"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard 
                  title="Full-Stack Applications" 
                  description="See how frontend and backend come together in complete projects."
                  icon={<Code />}
                  link="/fullstack"
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Latest Tutorials
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <TutorialCard 
                  title="Creating a Responsive Navbar"
                  description="Learn how to build a mobile-friendly navigation bar using React and Material-UI."
                  date="2023-05-15"
                  link="/tutorials/responsive-navbar"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TutorialCard 
                  title="Setting up a Node.js API"
                  description="Step-by-step guide to creating a RESTful API with Express and MongoDB."
                  date="2023-05-10"
                  link="/tutorials/nodejs-api"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TutorialCard 
                  title="Implementing OAuth 2.0"
                  description="Secure your application with OAuth 2.0 authentication."
                  date="2023-05-05"
                  link="/tutorials/oauth-implementation"
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Monetization
            </Typography>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Advertise with Us
                </Typography>
                <Typography variant="body1" paragraph>
                  Reach our growing community of developers and tech enthusiasts. Place your ad here!
                </Typography>
                <Button variant="contained" color="primary">
                  Contact for Ad Placement
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function ProjectCard({ title, description, icon, link }: ProjectCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={link}>
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}

interface TutorialCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

function TutorialCard({ title, description, date, link }: TutorialCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Published on {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={link}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

