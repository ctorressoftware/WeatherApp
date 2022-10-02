import { useState, useEffect } from 'react';
import WeatherTitle from './WeatherTitle';
import WeatherContent from './WeatherContent';
import { alpha } from "@mui/material";
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Api from '../services/Api';

let apiGetLocation = process.env.REACT_APP_API_GET_COUNTRY + process.env.REACT_APP_API_KEY_GET_COUNTRY;
let apiGetWeather = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_ACCESS_KEY;

const WeatherBox = () => {

    let [country, setCountry] = useState({});
    let [weather, setWeather] = useState(null);

    useEffect(() => {
        
        const getData = async () => {
            
            let responseLocation = await Api.get(apiGetLocation);
            setCountry({ name: responseLocation.location.country.name, city: responseLocation.location.city });

            let responseWeather = await Api.get(apiGetWeather + "&query=" + responseLocation.location.country.name + ", " + responseLocation.location.city);
            setWeather(responseWeather);
        }

        getData();

    }, []);

    return (
        <Box
            backgroundColor={alpha(grey[900], 0.2)}
            color={grey}
            width='40%'
        >
            { country.name && <WeatherTitle country={country.name} /> }
            { weather && <WeatherContent weatherInfo={weather} /> }
        </Box>
    );
}

export default WeatherBox;