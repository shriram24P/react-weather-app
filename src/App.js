import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components'
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';

const API_key = "268f0cbf658c574f4e7a83672ca6179e";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin:auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color:black;
  font-size: 18px;
  font-weight: bold;

`;

 
function App() {
  const [city, updateCity] = useState();
  const [weather, updateweather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
const response = 
await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
updateweather(response.data);
}
  return (
    <Container>
     <AppLabel>React Weather App</AppLabel>
     {weather? 
     (<WeatherComponent weather={weather}/>
     ): (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      )}
    
    </Container>
  );
}

export default App;
