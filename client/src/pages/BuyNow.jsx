import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const BuyNow = () => {
    // Use the useParams hook to get the package type from the URL
    const { packageType } = useParams();

    // Define the details for each package type
    const packageDetails = {
        basic: {
            title: "Basic Package",
            price: "$500 - $1000",
            features: [
                "Keyword research",
                "On-page optimization",
                "Basic technical SEO audit"
            ]
        },
        standard: {
            title: "Standard Package",
            price: "$5000 - $10000",
            features: [
                "Custom website development",
                "Up to 10 pages",
                "Advanced functionality",
                "Content management system (CMS)"
            ]
        },
        premium: {
            title: "Premium Package",
            price: "$20000+",
            features: [
                "Advanced keyword research and analysis",
                "Comprehensive on-page and off-page optimization",
                "Technical SEO audit, implementation, and ongoing monitoring",
                "Dedicated account manager"
            ]
        }
    };

    // Get the details for the selected package type
    const selectedPackage = packageDetails[packageType];

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <Card className="border-0 shadow">
                        <Card.Body>
                            <h2 className="text-center">{selectedPackage.title}</h2>
                            <p className="text-center text-muted">{selectedPackage.price}</p>
                            <ul className="list-unstyled">
                                {selectedPackage.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="text-center">
                                <button className="btn btn-primary">Proceed to Payment</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
