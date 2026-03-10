const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// console.log(process.env.OPEN_WEATHER_MAP_API_KEY);

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


export const getAQIData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;

//   console.log("Request URL:", url);

  const response = await fetch(url);
  const data = await response.json();

//   console.log("API response:", data);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to fetch AQI data");
  }

  return data?.list?.[0];
};