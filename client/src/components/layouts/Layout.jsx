import { Container, Row, Col, Card } from 'react-bootstrap';

export const Layout = () => {
    return (
        <Container className="py-4">
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Users</h3>
                            <p>Manage users and their roles.</p>
                            {/* Add links or buttons for managing users */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Products</h3>
                            <p>Manage products and inventory.</p>
                            {/* Add links or buttons for managing products */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Orders</h3>
                            <p>View and process orders.</p>
                            {/* Add links or buttons for managing orders */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Analytics</h3>
                            <p>View analytics and reports.</p>
                            {/* Add links or buttons for viewing analytics */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h3>Settings</h3>
                            <p>Manage account settings.</p>
                            {/* Add links or buttons for managing settings */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

