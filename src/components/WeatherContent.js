import WeatherIcon from '../utils/WeatherImages';
import { Grid } from '@mui/material';

const WeatherContent = ({ weatherInfo }) => {

    return (
        <>
            {weatherInfo &&
                <Grid container p={2}>
                    <Grid container justifyContent="center" alignItems="center" spacing={8}>
                        <Grid item>
                            <img style={{ width: "100%", maxWidth: "120px", height: "auto" }} src={WeatherIcon[weatherInfo.current.weather_code]} alt="Weather icon" />
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: "calc(12px + 3vw)", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>{weatherInfo.current.temperature} °C</h1>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <h2 style={{ textAlign: "center", fontSize: "calc(12px + 1vw)" }}>Today, the weather is {weatherInfo.current.weather_descriptions[0].toLocaleLowerCase() + "."}</h2>
                    </Grid>
                </Grid>
            }
        </>
    );
}

export default WeatherContent;