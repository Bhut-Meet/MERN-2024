import { Container, Row, Col } from 'react-bootstrap';

export const ChatPage = () => {
  const chatMessages = [
    { user: 'You', message: 'Hello!' },
    { user: 'Friend', message: 'Hi there!' },
    { user: 'You', message: 'How are you?' },
    { user: 'Friend', message: 'I\'m good, thanks for asking!' },
    // Add more messages as needed
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <div className="chat-window">
            {chatMessages.map((chat, index) => (
              <div key={index} className={`message ${chat.user === 'You' ? 'sent' : 'received'}`}>
                <p>{chat.message}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
