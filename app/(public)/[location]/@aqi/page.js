import AQIComponent from "@/components/AQIComponent";

const AQIPage = async ({ searchParams }) => {

    const { latitude, longitude } = await searchParams;

    return <AQIComponent lat={latitude} lon={longitude} />
};

export default AQIPage;
