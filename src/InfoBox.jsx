import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const SNOW_URL="https://images.unsplash.com/photo-1617657325434-605291e6a3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo-{info.weather}</h1> */}
            <div className='cardContainer'>
             {/* <Card sx={{ maxWidth: 345 }}> */}
      {/* <CardMedia
        sx={{ height: 140 }}
        // image={info.humidity >80 ?RAINY_URL : info.temp>15 ? HOT_URL : info.temp < 0 ? SNOW_URL : COLD_URL}
        image={info.humidity >80 ?RAINY_URL : info.temp>15 ? HOT_URL  : COLD_URL}

        title="green iguana"
      /> */}
      {/* {typeof info.temp === "number" && ( */}

      <Card sx={{ maxWidth: 345 }}>

    {/* {info.temp !== null && ( */}
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
            ? RAINY_URL
            : info.temp > 15
            ? HOT_URL
            : info.temp >0 && info.temp<15 ?COLD_URL :SNOW_URL
        }
            title="Weather"

      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity >80 ?<ThunderstormIcon /> : info.temp>15 ? <WbSunnyIcon />: info.temp < 0 ?<AcUnitIcon /> :< AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary"  component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Temperature = {info.temp}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <b>{info.weather}</b> and feelslike = {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    {/* )} */}
    </div>
        </div>
    )
}