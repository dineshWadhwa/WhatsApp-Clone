import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation'
import { Box, Divider, styled } from '@mui/material';
import { useAccountContext } from '../../Context/AccountProvider';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations = () => {
  const [users, setUsers] = useState([])
  const { account } = useAccountContext();
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers()
      setUsers(response)
    }
    fetchData();
  }, [])
  return (
    <Component>
      {
        users?.map((user, index) => (
          // user.sub !== account.sub && 
          <>
            <Conversation user={user} />
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