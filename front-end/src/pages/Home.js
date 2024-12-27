import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h3">Welcome to Location Tracker</Typography>
        <Typography variant="h5" style={{ margin: '20px 0' }}>
          Track your location in real-time and manage it effectively.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/login">
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Home;