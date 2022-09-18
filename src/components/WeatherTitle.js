const WeatherTitle = ({country}) => {

    return (
        <>
            { country && (<h2 style={{ textAlign: "center" }}>The weather in {country} is...</h2>) }
        </>
    );
}

export default WeatherTitle;