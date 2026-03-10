import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({ params, searchParams }) => {
    const { latitude, longitude } = await searchParams;
    const { location } = await params;

    const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
    if (lat && lon) {
        return <WindComponent lat={lat} lon={lon} />;
    } else {
        return <NoLocationInfo />;
    }

};

export default WindPage;