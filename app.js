document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '4f32b3b1921d8ec998796b8a6b9ef8cf';
    const city = 'Rio das Pedras, Brazil';
  
    const temperatureElement = document.getElementById('temperature');
  
    const fetchTemperature = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
  
        if (response.ok) {
          const temperature = data.main.temp;
          const temperatureInCelsius = temperature - 273.15; // Convert to Celsius
          temperatureElement.textContent = `Temperature: ${temperatureInCelsius.toFixed(2)} °C`;
        } else {
          temperatureElement.textContent = `Error: ${data.message}`;
        }
      } catch (error) {
        console.error('Error fetching temperature:', error);
        temperatureElement.textContent = 'Error fetching temperature';
      }
    };
  
    fetchTemperature();
  });
  