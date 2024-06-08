import  { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../store/auth';

export const ChatPage = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const currentUser = 'You'; // Replace this with the actual current user identifier

  const {  API } = useAuth();
  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await fetch(`${API}/api/admin/contacts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChatMessages(data);
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };

    fetchChatMessages();
  }, []);
  const userMessages = chatMessages.filter(chat => chat.userId === currentUser);

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className='chat-window'>
            {userMessages .map((chat, index) => (
              <div
                key={index}
                className={`message ${chat.user === 'You' ? 'sent' : 'received'}`}
              >
                <p>
                  {chat.user}{' '}
                  <span style={{ marginLeft: '22px' }}>{chat.message}</span>
                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
