"use client"

import Card from "@/components/Card";


const Error = ({ error, retry }) => {
    return (
        <Card>
            <h1>{error.message}, Try Again</h1>
        </Card>
    );
};

export default Error;