import WindComponent from "@/components/WindComponent";

const WindPage = async ({ searchParams }) => {
    const { latitude, longitude } = await searchParams;

    return <WindComponent lat={latitude} lon={longitude} />;
};

export default WindPage;