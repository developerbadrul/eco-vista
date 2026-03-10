import WeatherComponent from "@/components/WeatherComponent";

const WeatherPage = async ({ searchParams }) => {
    const { latitude, longitude } = await searchParams;
    return <WeatherComponent lat={latitude} lon={longitude} />;
};

export default WeatherPage;