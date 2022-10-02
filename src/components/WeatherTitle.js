const WeatherTitle = ({country}) => {

    return (
        <>
            { country && (<h2 style={{ textAlign: "center", fontSize: "calc(12px + 1vw)" }}>The weather in {country} is...</h2>) }
        </>
    );
}

export default WeatherTitle;