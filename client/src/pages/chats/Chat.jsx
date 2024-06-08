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
        <Col md={{ span: 8, offset: 2 }}>
          <div className="chat-window">
            {chatMessages.map((chat, index) => (
              <div key={index} className={`message ${chat.user === 'You' ? 'sent' : 'received'}`}>
                <p style={{backgroundColor:"black"}}>{chat.user} <span style={{marginLeft:"22px"}}>{chat.message}</span></p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};







// import { useEffect, useState } from "react";
// import { useAuth } from "../../store/auth";
// export const ChatPage = () => {
//   const { authorizationToken, API, getCurrentUserId  } = useAuth();
//   const [contactData, setContactData] = useState([]);

//   const getContactsData = async () => {
//     try {
//       const response = await fetch(`${API}/api/admin/contacts`, {
//         method: "GET",
//         headers: {
//           Authorization: authorizationToken,
//         },
//       });
//       const data = await response.json();
//       console.log("Fetched data:", data);
//       if (response.ok) {
//         setContactData(data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getContactsData();
//   }, [API]);

//   // Log current user ID and contact data for debugging
//   console.log("Current User ID:", getCurrentUserId);
//   console.log("Contact Data:", contactData);

//   // Filter messages to include only those sent by the current user
//   const userMessages = contactData.filter(contact => contact.userId === getCurrentUserId);

//   return (
//     <>
//       <h1>Messages</h1>
//       <div>
//         {userMessages.length > 0 ? (
//           userMessages.map((curContactData, index) => {
//             const { message } = curContactData;

//             return (
//               <div key={index}>
//                 <p>{message}</p>
//               </div>
//             );
//           })
//         ) : (
//           <p>No messages to display.</p>
//         )}
//       </div>
//     </>
//   );
// };
