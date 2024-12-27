import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to track page
      window.location.href = '/track';
    } catch (error) {
      setError(error.response?.data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;