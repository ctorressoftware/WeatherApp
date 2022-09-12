import React from 'react'
import Box from '@mui/material/Box';
import WeatherBox from './WeatherBox';

const WeatherApp = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <WeatherBox />
    </Box>
  );
}

export default WeatherApp;