import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
            Build with Code
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/under-development">
            Projects
          </Button>
          <Button color="inherit" component={Link} href="/under-development">
            Portfolio
          </Button> 
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

