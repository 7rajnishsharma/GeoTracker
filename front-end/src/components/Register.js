import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('http://localhost:5000/api/users/register', { username, password });
      alert('User  registered successfully!'); // Notify the user of successful registration
      window.location.href = '/login'; // Redirect to login page after successful registration
    } catch (error) {
      setError(error.response?.data.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
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
          Register
        </Button>
        <Typography align="center" style={{ marginTop: '10px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Register;