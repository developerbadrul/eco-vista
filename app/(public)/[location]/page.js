import LocationInfo from "@/components/LocationInfo";

const CurrentLocationPage = async ({ params, searchParams }) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    return <LocationInfo lat={latitude} lon={longitude} />;
};

export default CurrentLocationPage;