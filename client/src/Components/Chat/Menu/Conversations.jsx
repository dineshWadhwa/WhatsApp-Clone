import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation'
import { Box, Divider, styled } from '@mui/material';
import { useSelector } from 'react-redux';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations = ({ text }) => {
  const [users, setUsers] = useState([])
  const {user:_} = useSelector(_=>_.auth)

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers()
      const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
      setUsers(filteredData)
    }
    fetchData();
  }, [text])
  return (
    <Component>
      {
        users?.map((user, index) => (
          user.sub !== _.sub && 
          <>
            <Conversation user={user} key={index}/>
            {
              users?.length !== (index + 1) && <StyledDivider />
            }
          </>
        ))
      }
    </Component>
  )
}

export default Conversations