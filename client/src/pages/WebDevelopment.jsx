import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const WebDevelopment = (packages ) => {
    return (
        <div className="bg-light">
            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center display-4 text-primary mb-4">Web Development</h1>
                        <p className="text-center lead text-muted">Expert development services to bring your website to life.</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">Pricing</h2>
                    </Col>
                </Row>
                <Row className="mb-5">
                    {packages && packages.map((pkg, index) => (
                        <Col key={index} md={4} className="mb-4 mb-md-0">
                            <Card className="border-0 shadow">
                                <Card.Body>
                                    <h3 className="text-center">{pkg.title}</h3>
                                    <p className="text-center text-muted">{pkg.price}</p>
                                    <ul className="list-unstyled">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Link to="/buynow" className="btn w-100" style={{ backgroundColor: "#9333EA", color: "white" }}>Buy Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
