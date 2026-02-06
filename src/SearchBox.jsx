import "./SearchBox.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
export default function SearchBox({handleNewData})
{
    let [city, setCity] = useState("")

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?q="
    let API_KEY ="d3ccfd21fc4026c2fff3395701eb252e" 

    let getWeatherInfo = async ()=>{
        let res = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`)
        let jsonRes = await res.json()
        // console.log(jsonRes)
        let result = {
            city: city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,
            whether: jsonRes.weather[0].description
        }
        console.log(result)
        handleNewData(result)
    }
    function handleChange(e){
        setCity(e.target.value)
         
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(city)
        getWeatherInfo()  
        setCity("")
        
    }
    return (
        <div className="SearchBox">
            <h2>Search for Weather</h2>
            <form action="" onSubmit={handleSubmit}>

                 <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleChange} />

                 <br /><br />

                 <Button variant="contained" type="submit" >Submit</Button>
                 
            </form>
        </div>
    )
}