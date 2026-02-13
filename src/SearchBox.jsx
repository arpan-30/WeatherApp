import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';


// if(process.env.NODE_ENV !="production"){
//     require('dotenv').config();
// }

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY=process.env.API_KEY;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo=async ()=>{
       try{
         let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
       }catch(err){
        throw err;
       }
    }
    

    let handleChange=(event)=>{
        setCity(event.target.value);
        setError("");

    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            // console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            // setError("No such place in our API");
            setError(true);

        }

    }
    return (
        <div className='SearchBox'>
            {/* <h2>Search for the weather </h2> */}
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                 <Button variant="contained" endIcon={<SearchIcon />} type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}