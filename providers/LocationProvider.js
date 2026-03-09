"use client"
import { LocationContext } from "@/context";
import { useContext, useState, useEffect } from 'react';



export const LocationProvider = ({ children }) => {
    const [coords, setCoords] = useState({ lat: null, lon: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const detectLocation = () => {
            if (!navigator.geolocation) {
                setError("Geolocation not supported");
                setLoading(false);
                return;
            }

            navigate.geolocation.getCurrentPosition(
                (position) => {
                    setCoords({ lat: position.coords.latitude, lon: position.coords.longitude })
                    setLoading(false)
                },
                (err) => {
                    setError(err.message);
                    setLoading(false);
                }
            )
        }
        detectLocation()
    }, [])


    return (
        <LocationContext.Provider value={{ coords, loading, error }}>
            {children}
        </LocationContext.Provider>
    );
};


export const useCurrentLocation = () => useContext(LocationContext)

