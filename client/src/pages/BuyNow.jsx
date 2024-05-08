import React from 'react';
import { useLocation } from 'react-router-dom';

export const BuyNowPage = () => {
    // Use location hook to access URL parameters
    const location = useLocation();
    // Parse URL search params
    const searchParams = new URLSearchParams(location.search);
    // Get title and price from URL parameters
    const title = searchParams.get('title');
    const price = searchParams.get('price');

    return (
        <div>
            <h1>Selected Package</h1>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    );
}

