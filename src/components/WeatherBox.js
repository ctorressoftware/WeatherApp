import { useState, useEffect } from 'react';
import WeatherTitle from './WeatherTitle';
import WeatherContent from './WeatherContent';
import { alpha } from "@mui/material";
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

let apiGetLocation = process.env.REACT_APP_API_GET_COUNTRY + process.env.REACT_APP_API_KEY_GET_COUNTRY;
let apiGetWeather = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_ACCESS_KEY;

const WeatherBox = () => {

    let [country, setCountry] = useState({});
    let [weather, setWeather] = useState(null);

    useEffect(() => {

        fetch(apiGetLocation).then(data => data.json())
            .then(response => {
                setCountry({ name: response.location.country.name, city: response.location.city });

                fetch(apiGetWeather + "&query=" + response.location.country.name + ", " + response.location.city).then(data => data.json())
                .then(response => {
                    setWeather(response);
                });

            });

    }, []);

    return (
        <Box
            backgroundColor={alpha(grey[900], 0.2)}
            color={grey}
            width='30%'
            height='50vh'
        >
            { country.name && <WeatherTitle country={country.name} /> }
            { weather && <WeatherContent weatherInfo={weather} /> }
        </Box>
    );
}

export default WeatherBox;