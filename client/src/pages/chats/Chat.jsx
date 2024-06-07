import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const ChatPage = () => {
  const { authorizationToken, currentUserID, API } = useAuth();
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchChatMessages = async () => {
    try {
      const response = await fetch(`${API}/api/chat/messages`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log('Fetched chat messages:', data);
      if (response.ok) {
        const currentUserMessages = data.filter(
          (message) =>
            message.sender === currentUserID || message.recipient === currentUserID
        );
        setChatMessages(currentUserMessages);
        setLoading(false);
      } else {
        toast.error('Failed to fetch chat messages');
      }
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      toast.error('Failed to fetch chat messages');
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, []); // Fetch chat messages when component mounts

  return (
    <div className="container">
      <h2 className="my-4">Chat Messages</h2>
      {loading ? (
        <div className="text-center mx-3">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div>
          {chatMessages.length === 0 ? (
            <p>No chat messages found.</p>
          ) : (
            <ul>
              {chatMessages.map((message) => (
                <li key={message._id}>
                  <p>
                    <strong>From:</strong> {message.sender}
                  </p>
                  <p>
                    <strong>To:</strong> {message.recipient}
                  </p>
                  <p>
                    <strong>Message:</strong> {message.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

