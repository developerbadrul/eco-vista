import LocationInfo from "@/components/LocationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const CurrentLocationPage = async ({ params, searchParams }) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
    if (lat && lon) {
        return <LocationInfo lat={lat} lon={lon} />;
    } else {
        return <NoLocationInfo />;
    }


};

export default CurrentLocationPage;