import TemperatureComponent from "@/components/TemperatureComponent";

const TemperaturePage = async ({ searchParams }) => {
    const { latitude, longitude } = await searchParams;

    return <TemperatureComponent lat={latitude} lon={longitude} />;
};

export default TemperaturePage;