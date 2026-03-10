'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
const LocationDetector = () => {
    const [error, setError] = useState(null)
    const router = useRouter();
    const searchParams = useSearchParams()

    const requestedRef = useRef(false)
    const timeoutRef = useRef(null)

    const getCurrentLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        setError(null);

        // custom 5s timeout
        timeoutRef.current = setTimeout(() => {
            setError("Location request timed out. Please allow location access.")
        }, 5000)

        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current)
                const params = new URLSearchParams(searchParams.toString());

                params.set("latitude", position.coords.latitude.toString());
                params.set("longitude", position.coords.longitude.toString());

                router.replace(`/current?${params.toString()}`);
            },

            (err) => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current)

                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        setError("Location permission denied. Please allow location access.");
                        break;
                    case err.POSITION_UNAVAILABLE:
                        setError("Location information is unavailable.");
                        break;
                    case err.TIMEOUT:
                        setError("Location request timed out.");
                        break;
                    default:
                        setError("Unable to retrieve your location.");
                }
            },

            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    }, [router, searchParams]);


    useEffect(() => {
        if (requestedRef.current) return
        requestedRef.current = true

        getCurrentLocation();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, []);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <p className="text-red-500">{error}</p>

                <button
                    onClick={getCurrentLocation}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Get Location
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-xl font-medium">Detecting your location...</p>
        </div>
    );
};

export default LocationDetector;