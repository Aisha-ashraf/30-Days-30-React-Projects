import Card
 from './Components/Card';
 import { useEffect } from 'react';
 import Input from './Components/Input';
 import Button from './Components/Button';
import './App.css';
import { useWeather } from './Context/Weather';

function App() {
  const weather = useWeather();
  useEffect(() =>{
    weather.fetchCurrentLocationData();
    //Get Current Location

  },[])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick ={weather.fetchData} value ="search" />
      <Card />
      <Button value = "Refresh"/>

    </div>
  );
}

export default App;
