import { getAQIData } from "@/lib/weather-info";

const AQIComponent = async() => {
     const data = await getAQIData(23.70, 90.497068)
    console.log(data);
    
    return (
        <div>
            Aqi component
        </div>
    );
};

export default AQIComponent;