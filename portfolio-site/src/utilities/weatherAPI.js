import { useState, useEffect } from 'react';

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({ temperature: null, weatherCode: null });

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=59.30&longitude=18.14&current_weather=true');
      if (response.ok) {
        const data = await response.json();
        setWeatherData({
          temperature: data.current_weather.temperature,
          weatherCode: data.current_weather.weathercode
        });
      } else {
        throw new Error('Error fetching weather');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return weatherData;
};