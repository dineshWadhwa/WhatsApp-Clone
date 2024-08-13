import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { getConversation } from '../../../service/api';
import { useSelector } from 'react-redux';

const ChatBox = () => {
  const {user:account} = useSelector(_=>_.auth)
  const {person} = useSelector(_=>_.account)
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
      setConversation(data);
    }
    getConversationDetails();
  }, [account.sub, person.sub]);

  return (
    <Box style={{ height: '75%' }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  )
}

export default ChatBox;