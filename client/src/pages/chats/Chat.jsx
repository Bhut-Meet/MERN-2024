// import { Container, Row, Col } from 'react-bootstrap';

// export const ChatPage = () => {
//   const chatMessages = [
//     { user: 'You', message: 'Hello!' },
//     { user: 'Friend', message: 'Hi there!' },
//     { user: 'You', message: 'How are you?' },
//     { user: 'Friend', message: 'I\'m good, thanks for asking!' },
//     // Add more messages as needed
//   ];

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={{ span: 8, offset: 2 }}>
//           <div className="chat-window">
//             {chatMessages.map((chat, index) => (
//               <div key={index} className={`message ${chat.user === 'You' ? 'sent' : 'received'}`}>
//                 <p>{chat.user} <span style={{marginLeft:"22px"}}>{chat.message}</span></p>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";



export const ChatPage = () => {
  const { authorizationToken, API } = useAuth();
const [contactData, setContactData] = useState([]);

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("data is ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    return (
      <>
      <h1>message</h1>
      <div>
        {contactData.map((curContactData,index)=> {
          const {message} = curContactData

          return(
            <div key={index}>
              <p>{message}</p>
            </div>
          )
        })}
      </div>
      </>
    );
};