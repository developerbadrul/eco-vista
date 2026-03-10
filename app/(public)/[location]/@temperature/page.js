import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({ params, searchParams }) => {
    const { latitude, longitude } = await searchParams;
    const { location } = await params;

    const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
    if (lat && lon) {
        return <TemperatureComponent lat={lat} lon={lon} />;
    }

};

export default TemperaturePage;