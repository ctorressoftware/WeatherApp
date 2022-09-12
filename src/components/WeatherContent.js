const WeatherContent = ({weatherInfo}) => {

    const WEATHER = {
        'Sunny': 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
        'Partly cloudy': 'https://cdn-icons-png.flaticon.com/512/1140/1140045.png',
        'Cloudy': 'https://cdn-icons-png.flaticon.com/512/1542/1542627.png',
        'Overcast': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Weather-overcast.svg/2048px-Weather-overcast.svg.png',
        'Mist': 'https://cdn-icons-png.flaticon.com/512/1779/1779807.png',
        'Patchy rain possible': 'https://cdn.pixabay.com/photo/2017/09/25/18/24/cloud-2786140_960_720.png',
        'Patchy snow possible': 179,
        'Patchy sleet possible': 182,
        'Patchy freezing drizzle possible': 185,
        'Thundery outbreaks possible': 200,
        'Blowing snow': 227,
        'Blizzard': 230,
        'Fog': 248,
        'Freezing fog': 260,
        'Patchy light drizzle': 263,
        'Light drizzle': 266,
        'Freezing drizzle': 281,
        'Heavy freezing drizzle': 284,
        'Patchy light rain': 293,
        'Light rain': 296,
        'Moderate rain at times': 299,
        'Moderate rain': 302,
        'Heavy rain at times': 305,
        'Heavy rain': 308,
        'Light freezing rain': 311
    }

    return (
        <>
            {console.log(weatherInfo)}
            { weatherInfo && 
                <>
                    <img style={{ width: "200px" }} src={WEATHER[weatherInfo.current.weather_descriptions[0]]} alt="Weather icon" />
                    <h1>{weatherInfo.current.temperature} °C</h1>
                    <h1>Today, the weather is {weatherInfo.current.weather_descriptions[0]}</h1>
                </> 
            }
        </>
    );
}

export default WeatherContent;