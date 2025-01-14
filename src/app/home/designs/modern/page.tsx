import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material'
import { Code, Palette, Build, ArrowForward } from '@mui/icons-material'

export default function DefaultHomePage() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText', 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' }, 
              fontWeight: 'bold', 
              mb: 2,
              position: 'relative',
              zIndex: 2
            }}>
            Build with Code
          </Typography>
          <Typography variant="h5" component="h2" 
            sx={{ 
              mb: 4,
              position: 'relative',
              zIndex: 2
            }}>
            Crafting Digital Experiences, One Project at a Time
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            component={Link} 
            href="/projects"
            sx={{ 
              position: 'relative',
              zIndex: 2
            }}
          >
            Explore My Projects
          </Button>
        </Container>
        <Box sx={{
          position: 'absolute',
          top: -100,
          left: -100,
          right: -100,
          bottom: -100,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          transform: 'rotate(45deg)',
          zIndex: 1
        }} />
      </Box>

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={Link} href={project.link}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            My Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill) => (
              <Grid item key={skill.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                  {skill.icon}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" align="center">
                      {skill.title}
                    </Typography>
                    <Typography align="center">
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to start a project?
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4 }}>
            Let's work together to bring your ideas to life!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={Link} 
            href="/contact"
            endIcon={<ArrowForward />}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </>
  )
}

const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js.',
    image: '/placeholder.svg?height=300&width=400',
    link: '/projects/e-commerce'
  },
  {
    title: 'Task Management App',
    description: 'A responsive task manager built with React and Firebase.',
    image: '/placeholder.svg?height=300&width=400',
    link: '/projects/task-manager'
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek, responsive portfolio site using Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=300&width=400',
    link: '/projects/portfolio'
  }
]

const skills = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and intuitive user interfaces with React, Next.js, and modern CSS.',
    icon: <Palette sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications with Node.js, Express, and databases like MongoDB.',
    icon: <Code sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
  },
  {
    title: 'Full-Stack Integration',
    description: 'Seamlessly connecting frontend and backend to create cohesive, full-stack applications.',
    icon: <Build sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
  }
]

