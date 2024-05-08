import { WebDevelopment } from "./WebDevelopment";// Assuming WebDevelopment component is in a separate file named WebDevelopment.js

export const WebDevelopmentPage = () => {
    // Example packages data
    const packages = [
        {
            title: "Basic Package",
            price: "$2000 - $5000",
            features: [
                "Custom website development",
                "Up to 5 pages",
                "Basic functionality"
            ]
        },
        {
            title: "Standard Package",
            price: "$5000 - $10000",
            features: [
                "Custom website development",
                "Up to 10 pages",
                "Advanced functionality",
                "Content management system (CMS)"
            ]
        },
        {
            title: "Premium Package",
            price: "$10000 - $20000+",
            features: [
                "Custom website development",
                "Unlimited pages",
                "Advanced functionality",
                "Content management system (CMS)",
                "E-commerce integration"
            ]
        }
    ];

    return (
        <WebDevelopment packages={packages} />
    );
}

