import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const WebDevelopment = ({ packages }) => {
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
                        <h2 className="text-center mb-4">Web Development Services</h2>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li><strong>Custom Website Development:</strong> We build custom websites tailored to your specific needs and requirements. Whether you need a simple business website or a complex web application, we have the expertise to bring your vision to life.</li>
                                    <li><strong>Frontend Development:</strong> Our frontend developers specialize in creating interactive and user-friendly interfaces using modern technologies such as HTML, CSS, and JavaScript. We focus on delivering a seamless user experience across all devices and platforms.</li>
                                    <li><strong>Backend Development:</strong> Our backend developers are skilled in building robust and scalable server-side applications using frameworks like Node.js, Django, and Ruby on Rails. We handle everything from database management to API integrations.</li>
                                    <li><strong>Content Management Systems (CMS):</strong> We can integrate popular CMS platforms like WordPress, Drupal, and Joomla to provide you with a flexible and easy-to-manage solution for your website.</li>
                                    <li><strong>E-commerce Development:</strong> If you're looking to sell products or services online, we can develop custom e-commerce solutions that are secure, scalable, and optimized for conversions.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">Pricing</h2>
                    </Col>
                </Row>
                <Row className="mb-5">
                    {packages.map((pkg, index) => (
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
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">What You Provide</h2>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <p>To ensure a smooth web development process, there are a few things you'll need to provide:</p>
                                <ol>
                                    <li><strong>Requirements Documentation:</strong> Provide detailed requirements and specifications for your website, including features, functionality, and design preferences.</li>
                                    <li><strong>Content:</strong> Supply all necessary content for your website, including text, images, videos, and any other media.</li>
                                    <li><strong>Feedback and Collaboration:</strong> Participate in regular feedback sessions and collaborate with our development team throughout the project to ensure your requirements are met.</li>
                                </ol>
                                <p>By providing these elements, we can work together to create a high-quality website that meets your needs and exceeds your expectations. If you're ready to get started or have any questions, feel free to contact us!</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

WebDevelopment.propTypes = {
    packages: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired
};