import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AdminDashboard = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {locations.map((location) => (
          <Grid item xs={12} sm={6} md={4} key={location._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">:User  {location.userId.username}</Typography>
                <Typography>Latitude: {location.coordinates.coordinates[1]}</Typography>
                <Typography>Longitude: {location.coordinates.coordinates[0]}</Typography>
                <Typography>Timestamp: {new Date(location.createdAt).toLocaleString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;