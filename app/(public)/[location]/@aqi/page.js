import AQIComponent from "@/components/AQIComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIPage = async ({ params, searchParams }) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
    if (lat && lon) {
        return <AQIComponent lat={lat} lon={lon} />
    }

};

export default AQIPage;
