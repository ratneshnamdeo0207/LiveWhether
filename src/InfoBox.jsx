import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";
import SearchBox from './SearchBox.jsx'



export default function InfoBox() {
    let [weather, setWeather] = useState(null);

    let handleNewData=(w) =>
    {
        setWeather(w)
    }

    let Cold_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Hot_URL = "https://images.unsplash.com/photo-1763431543065-418c41851f3e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Rainy_URL = "https://images.unsplash.com/photo-1763431543065-418c41851f3e?q=80&w=869&auto=format&fit=cropgit status&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (

        <>
            <SearchBox handleNewData={handleNewData}/>
            {weather && (
    <div className="InfoBox">
        <h2>WeatherInfo- {weather.city.toUpperCase()}</h2>
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={weather.humidity > 40 ? Rainy_URL : weather.temp < 15 ? Cold_URL : Hot_URL}
                />
                <CardContent>
                    <h2>{weather.city.toUpperCase()}</h2>
                    <p>Temperature: {weather.temp}&deg;C </p>
                    <p>Humidity: {weather.humidity} </p>
                    <p>Min Temp: {weather.tempMin} </p>
                    <p>Max Temp: {weather.tempMax} </p>
                    <p>The weather can be described as <i>{weather.whether}</i> and feels like {weather.feelsLike}&deg;C </p>
                </CardContent>
            </Card>
        </div>
    </div>
)}
        </>

    )
}