import React, { useEffect } from 'react';
import axios from 'axios';

const LocationTracker = () => {
  useEffect(() => {
    const sendLocation = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            await axios.post('http://localhost:5000/api/locations', {
              latitude,
              longitude,
            }, {
              headers: {
                Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
              },
            });
          } catch (error) {
            console.error('Error sending location:', error);
          }
        }, (error) => console.error(error));
      }
    };

    sendLocation();
  }, []);

  return <div>Tracking your location...</div>;
};

export default LocationTracker;