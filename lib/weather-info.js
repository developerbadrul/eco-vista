const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeather = async (lat, lon) => {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`, {
            next: { revalidate: 150 }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch weather data")
        }

        return response.json()

    } catch (e) {
        console.error(e.message);
    }
}


export async function getWeatherData(lat, lon) {
    const data = await getWeather(lat, lon)
    return data.weather?.[0]
}


export async function getTemperatureData(lat, lon) {
    const data = await getWeather(lat, lon)
    return data.main
}


export async function getWindData(lat, lon) {
    const data = await getWeather(lat, lon)
    return data.wind
}


export async function getAQIData(lat, lon) {
    const res = await fetch(
        `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        {
            next: { revalidate: 600 }
        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch AQI data")
    }

    const data = await res.json()
    return data.list?.[0]
}

