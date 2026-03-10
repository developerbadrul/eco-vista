import { getLocationByName } from "./location-util";

export async function GET(request, { params }) {
    const { name } = await params;

    const location = getLocationByName(name);

    if (!location) {
        return Response.json(
            { message: "Location not found" },
            { status: 404 }
        );
    }

    return Response.json(location);
}