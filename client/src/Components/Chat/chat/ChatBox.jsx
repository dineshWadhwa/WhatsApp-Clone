import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAccountContext } from '../../Context/AccountProvider';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { getConversation } from '../../../service/api';

const ChatBox = () => {
  const { account, person } = useAccountContext()
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