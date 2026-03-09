
const CurrentLocationPage = async ({ params, searchParams }) => {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    return (
        <div>
            this is current location page, and params is {location}, current location {latitude} {longitude}
        </div>
    );
};

export default CurrentLocationPage;