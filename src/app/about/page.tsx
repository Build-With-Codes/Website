'use client'

import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Code, Lightbulb, Palette, Build } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

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

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            About Build with Code
          </Typography>
          
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              My Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Build with Code, my personal project showcase website. Here, I share my journey in web development through the projects I create. This platform serves as a portfolio of my work, demonstrating my skills and growth in frontend design and full-stack development.
            </Typography>
            <Typography variant="body1" paragraph>
              As a passionate developer, I believe in learning by doing. Each project you'll find here represents a challenge I've tackled, a new technology I've explored, or a problem I've solved. Through this website, I aim to document my progress and inspire other developers on their coding journey.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              What You'll Find Here
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText 
                  primary="Frontend Designs" 
                  secondary="Showcasing my UI/UX skills through responsive and intuitive web interfaces."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText 
                  primary="Full-Stack Applications" 
                  secondary="Demonstrating end-to-end development with various technologies and frameworks."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Build />
                </ListItemIcon>
                <ListItemText 
                  primary="Coding Challenges" 
                  secondary="Solutions to interesting programming problems and algorithm implementations."
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              My Development Process
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      1. Ideation
                    </Typography>
                    <Typography variant="body2">
                      Every project starts with an idea. I brainstorm concepts that challenge me to learn new skills or solve real-world problems.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      2. Development
                    </Typography>
                    <Typography variant="body2">
                      I bring ideas to life through code, focusing on clean, efficient, and maintainable solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      3. Showcase
                    </Typography>
                    <Typography variant="body2">
                      I document my process, challenges faced, and lessons learned, then share the finished project here on Build with Code.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Interested in my work?
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              component={Link} 
              href="/projects"
              startIcon={<Lightbulb />}
            >
              Explore My Projects
            </Button>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
            I am an enthusiastic web developer who's still discovering and exploring the never-ending possibilities of the world of web development. My journey began when I was curious about how websites work, and since then, I've started working on such things as diving deeper into technologies such as TypeScript, React, Next.js, and Material-UI.</Typography>
            <Typography variant="body1" paragraph>
            I like trying out new tools and frameworks; it's like challenging myself to build intuitive, efficient web applications. Though far from knowing everything, I think every project is an opportunity to learn something new and improve my skills.</Typography>
            <Typography variant="body1">
            Feel free to check out my projects and reach out if you’d like to share ideas, discuss web development, or simply say hi. I’m always open to learning from others and collaborating! </Typography>
          
              </Box>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

