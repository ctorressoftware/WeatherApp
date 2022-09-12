const WeatherTitle = ({country}) => {

    return (
        <>
            { country && (<h2>The weather in {country} is ...</h2>) }
        </>
    );
}

export default WeatherTitle;