import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    // let [weatherInfo,setWeatherInfo]=useState({
    //     city:"Delhi",
    //     feelsLike: 12.36,
    //     humidity: 79,
    //     temp: 12.95,
    //     tempMax: 12.95,
    //     tempMin: 12.95,
    //     weather: "clear sky",
    // });

    let [weatherInfo,setWeatherInfo]=useState("");

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <b><h1 style={{textAlign:"center",padding:"20px",fontWeight:"bolder"}}>Weather App 🌦️</h1></b>
            <SearchBox updateInfo={updateInfo} />
            {weatherInfo && <InfoBox info={weatherInfo} /> }
        </div>
    )
}