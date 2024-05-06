import { Container, Row, Col, Card } from 'react-bootstrap';

export const WebDesign = () => {
    return (
        <div className="bg-light">
            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center display-4 text-primary mb-4">Web Design</h1>
                        <p className="text-center lead text-muted">Stunning, responsive designs that adapt to any device.</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">Web Design Services</h2>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li><strong>Stunning, Responsive Designs:</strong> Our team specializes in creating visually appealing designs that are not only stunning but also responsive. This means your website will look great and function well on any device, whether {`it's`} a desktop, tablet, or smartphone.</li>
                                    <li><strong>Custom Design:</strong> We tailor our designs to fit your brand identity and business goals. Whether {`you're`} looking for a sleek and modern look or something more classic and timeless, we can create a design that reflects your unique style.</li>
                                    <li><strong>User Experience (UX) Design:</strong> In addition to aesthetics, we focus on creating a seamless user experience. Our designs are intuitive and user-friendly, making it easy for visitors to navigate your site and find the information they need.</li>
                                    <li><strong>SEO-Friendly Design:</strong> We incorporate SEO best practices into our designs to help improve your {`website's`} visibility and rankings on search engines like Google. This includes optimizing site structure, meta tags, and other elements that impact search performance.</li>
                                    <li><strong>Content Integration:</strong> We can integrate your existing content or create new content for your website, including text, images, videos, and other media. Our goal is to create engaging and informative content that resonates with your target audience.</li>
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
                    <Col md={4} className="mb-4 mb-md-0">
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Basic Package</h3>
                                <p className="text-center text-muted">$1000 - $3000</p>
                                <ul className="list-unstyled">
                                    <li>Includes up to 5 pages</li>
                                    <li>Basic design customization</li>
                                    <li>Limited content integration</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Standard Package</h3>
                                <p className="text-center text-muted">$3000 - $7000</p>
                                <ul className="list-unstyled">
                                    <li>Includes up to 10 pages</li>
                                    <li>Custom design tailored to your brand</li>
                                    <li>Enhanced content integration</li>
                                    <li>Basic SEO optimization</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Premium Package</h3>
                                <p className="text-center text-muted">$7000 - $10000+</p>
                                <ul className="list-unstyled">
                                    <li>Includes unlimited pages</li>
                                    <li>Highly customized design with advanced features</li>
                                    <li>Comprehensive content integration</li>
                                    <li>Advanced SEO optimization</li>
                                    <li>Priority support</li>
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
                                <p>To ensure a smooth and successful web design process, there are a few things {`you'll`} need to provide:</p>
                                <ol>
                                    <li><strong>Brand Guidelines:</strong> Any existing brand guidelines or assets (logo, color palette, typography, etc.) that we can use to ensure consistency with your brand identity.</li>
                                    <li><strong>Content:</strong> This includes text copy, images, videos, and any other content you want to include on your website. If you {`don't`} have content ready, we can help you create it.</li>
                                    <li><strong>Feedback and Collaboration:</strong> Throughout the design process, {`we'll`} need your feedback and input to ensure {`we're`} meeting your expectations and goals. Collaboration is key to creating a website that meets your needs and resonates with your target audience.</li>
                                </ol>
                                <p>By providing these elements, we can work together to create a stunning and effective website that helps you achieve your business objectives. If {`you're`} interested in discussing your web design project in more detail or would like a personalized quote, please feel free to reach out to us. {`We'd`} be happy to answer any questions you may have and provide you with more information.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
