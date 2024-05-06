import { Container, Row, Col, Card } from 'react-bootstrap';

export const SEOOptimization = () => {
    return (
        <div className="bg-light">
            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center display-4 text-primary mb-4">SEO Optimization</h1>
                        <p className="text-center lead text-muted">Boost your {`website's`} visibility and rank higher in search engine results.</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">SEO Optimization Services</h2>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li><strong>Keyword Research:</strong> We conduct comprehensive keyword research to identify relevant search terms and phrases that your target audience is using.</li>
                                    <li><strong>On-Page Optimization:</strong> We optimize various on-page elements of your website, including meta tags, headings, and content, to improve its relevance and visibility for target keywords.</li>
                                    <li><strong>Technical SEO:</strong> We ensure that your website is technically optimized for search engines, including factors such as site speed, mobile-friendliness, and crawlability.</li>
                                    <li><strong>Link Building:</strong> We implement effective link building strategies to increase the number and quality of inbound links to your website, which can improve its authority and ranking in search results.</li>
                                    <li><strong>Content Marketing:</strong> We create high-quality, relevant content that attracts and engages your target audience, driving organic traffic and improving your {`website's`} overall SEO performance.</li>
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
                                <p className="text-center text-muted">$500 - $1000</p>
                                <ul className="list-unstyled">
                                    <li>Keyword research</li>
                                    <li>On-page optimization</li>
                                    <li>Basic technical SEO audit</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Standard Package</h3>
                                <p className="text-center text-muted">$1000 - $2000</p>
                                <ul className="list-unstyled">
                                    <li>Comprehensive keyword research</li>
                                    <li>On-page and off-page optimization</li>
                                    <li>Technical SEO audit and recommendations</li>
                                    <li>Monthly performance reporting</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow">
                            <Card.Body>
                                <h3 className="text-center">Premium Package</h3>
                                <p className="text-center text-muted">$2000 - $5000+</p>
                                <ul className="list-unstyled">
                                    <li>Advanced keyword research and analysis</li>
                                    <li>Comprehensive on-page and off-page optimization</li>
                                    <li>Technical SEO audit, implementation, and ongoing monitoring</li>
                                    <li>Monthly performance tracking and optimization</li>
                                    <li>Dedicated account manager</li>
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
                                <p>To ensure effective SEO optimization, there are a few things {`you'll`} need to provide:</p>
                                <ol>
                                    <li><strong>Access to Website:</strong> Provide access to your {`website's`} CMS, hosting platform, and Google Analytics account (if available).</li>
                                    <li><strong>Target Keywords:</strong> Identify target keywords and phrases relevant to your business, products, and services.</li>
                                    <li><strong>Content:</strong> Supply high-quality content that aligns with your target keywords and provides value to your audience.</li>
                                    <li><strong>Collaboration:</strong> Collaborate with our team to provide feedback, insights, and any additional information necessary for effective SEO optimization.</li>
                                </ol>
                                <p>By providing these elements, we can work together to enhance your{` website's`} visibility, attract more organic traffic, and ultimately improve your {`business's`} online presence. If {`you're`} ready to boost your SEO performance or have any questions, feel free to reach out to us!</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}
