import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({ params, searchParams }) => {
    const { latitude, longitude } = await searchParams;
    const { location } = await params;

    const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
    if (lat && lon) {
        return <WeatherComponent lat={lat} lon={lon} />;
    } 

};

export default WeatherPage;