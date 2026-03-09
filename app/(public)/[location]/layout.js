
const LocationLayout = ({
    children,
    weather,
    aqi,
    wind,
    temperature,
}) => {
    return (
        <div>
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
        </div>
    );
};

export default LocationLayout;