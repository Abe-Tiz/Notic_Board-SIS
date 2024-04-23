import React, { useEffect, useState } from 'react'
import SearchComponent from '../../../components/SearchComponent';
import ListSingMessage from './ListSingMessage';

const DisplayMessage = () => {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const response = await fetch("http://localhost:5000/single"); // Adjust the API endpoint as needed
          const data = await response.json();
            setMessages(data);
            // console.log(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      fetchMessages();
    }, []);
  
  // console.log("messages:", messages);

    return (
      <>
        <ListSingMessage messages={messages} />
      </>
    );
}

export default DisplayMessage
