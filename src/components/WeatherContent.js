import WeatherIcon from '../utils/WeatherImages';
import { Grid, colors } from '@mui/material';
import { grey } from '@mui/material/colors';

const WeatherContent = ({ weatherInfo }) => {

    return (
        <>
            {weatherInfo &&
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img style={{ width: "200px", marginLeft: "20px" }} src={WeatherIcon[weatherInfo.current.weather_code]} alt="Weather icon" />
                    </Grid>
                    <Grid item xs={6}>
                        <h1 style={{ fontSize: "80px", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>{weatherInfo.current.temperature} °C</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={{ textAlign: "center" }}>Today, the weather is {weatherInfo.current.weather_descriptions[0].toLocaleLowerCase() + "."}</h2>
                    </Grid>
                </Grid>
            }
        </>
    );
}

export default WeatherContent;