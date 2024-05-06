import { Container, Row, Col, Card } from 'react-bootstrap';

export const WebDevelopment = () => {
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
                                    <li><strong>E-commerce Development:</strong> If {`you're`} looking to sell products or services online, we can develop custom e-commerce solutions that are secure, scalable, and optimized for conversions.</li>
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
                    <Col md={4}>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Basic Package</h3>
                                <p className="text-center text-muted">$2000 - $5000</p>
                                <ul className="list-unstyled">
                                    <li>Custom website development</li>
                                    <li>Up to 5 pages</li>
                                    <li>Basic functionality</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Standard Package</h3>
                                <p className="text-center text-muted">$5000 - $10000</p>
                                <ul className="list-unstyled">
                                    <li>Custom website development</li>
                                    <li>Up to 10 pages</li>
                                    <li>Advanced functionality</li>
                                    <li>Content management system (CMS)</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Premium Package</h3>
                                <p className="text-center text-muted">$10000 - $20000+</p>
                                <ul className="list-unstyled">
                                    <li>Custom website development</li>
                                    <li>Unlimited pages</li>
                                    <li>Advanced functionality</li>
                                    <li>Content management system (CMS)</li>
                                    <li>E-commerce integration</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">What You Provide</h2>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <p>To ensure a smooth web development process, there are a few things {`you'll`} need to provide:</p>
                                <ol>
                                    <li><strong>Requirements Documentation:</strong> Provide detailed requirements and specifications for your website, including features, functionality, and design preferences.</li>
                                    <li><strong>Content:</strong> Supply all necessary content for your website, including text, images, videos, and any other media.</li>
                                    <li><strong>Feedback and Collaboration:</strong> Participate in regular feedback sessions and collaborate with our development team throughout the project to ensure your requirements are met.</li>
                                </ol>
                                <p>By providing these elements, we can work together to create a high-quality website that meets your needs and exceeds your expectations. If {`you're`} ready to get started or have any questions, feel free to contact us!</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
