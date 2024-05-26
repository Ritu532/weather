import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {


    const INIT_URL="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://www.oneindia.com/img/2019/02/summer-1550227579.jpg";
    const COLD_URL ="https://tse4.mm.bing.net/th?id=OIP.1gCv8WoKVKy7SxwSheiq2QHaEK&pid=Api&P=0&h=180";
    const RAIN_URL ="https://tse2.mm.bing.net/th?id=OIP.Vr3_el663kcvkr5dUxFr2wHaD4&pid=Api&P=0&h=180";

  
    return(
    <div className="InfoBox">
        
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15
           ? HOT_URL 
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {
          info.humidity > 80 
          ? <ThunderstormIcon /> 
          : info.temp > 15
           ? <WbSunnyIcon /> 
           : < AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>the weather can be describe as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
        );
}