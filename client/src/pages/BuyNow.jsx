import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const BuyNow = () => {
    const { packageType } = useParams();

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

    // Check if the packageType exists in the packageDetails object
    const selectedPackage = packageDetails[packageType];

    // If the packageType does not exist, display an error message or handle it as you prefer
    if (!selectedPackage) {
        return (
            <Container className="py-5">
                <Row>
                    <Col>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h2 className="text-center">Package Not Found</h2>
                                <p className="text-center">The selected package type does not exist.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

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
