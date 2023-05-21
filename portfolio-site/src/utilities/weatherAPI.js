import { useState, useEffect } from 'react';

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({ temperature: null, weatherCode: null });
  const [location, setLocation] = useState('Stockholm');

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = 'AIzaSyBIEUsZyszbEI_SqE2IWtc08mOe4mWjaTc';
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=sv&key=${apiKey}`;

          const locationResponse = await fetch(geocodingUrl);
          if (locationResponse.ok) {
            const locationData = await locationResponse.json();
        
            const area = locationData.results[0].address_components.find(component =>
                component.types.includes('administrative_area_level_1')
              )?.long_name;
              
              const country = locationData.results[0].address_components.find(component =>
                component.types.includes('country')
              )?.long_name;

            setLocation(`${area}, ${country}`);
          } else {
            throw new Error('Error fetching location');
          }

          const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
          
          if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
            setWeatherData({
              temperature: weatherData.current_weather.temperature,
              weatherCode: weatherData.current_weather.weathercode
            });
          } else {
            throw new Error('Error fetching weather');
          }
        });
      } else {
        const latitude = 59.30;
        const longitude = 18.14;
        setLocation('Stockholm');

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (weatherResponse.ok) {
          const weatherData = await weatherResponse.json();
          setWeatherData({
            temperature: weatherData.current_weather.temperature,
            weatherCode: weatherData.current_weather.weathercode
          });
        } else {
          throw new Error('Error fetching weather');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { weatherData, location };
};