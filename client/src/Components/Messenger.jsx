import React from 'react'
import { AppBar, Box, Toolbar, styled } from '@mui/material'
import LoginDailog from './Account/LoginDailog'
import { useAccountContext } from './Context/AccountProvider'
import ChatDailog from './Chat/ChatDailog'

const Header = styled(AppBar)`
height:125px;
background-color:#00A884;
box-shadow:none;
`
const LoginHeader = styled(AppBar)`
height:220px;
background-color:#00bfa5;
box-shadow:none;
`
const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC;
`
const Messenger = () => {
  const { account } = useAccountContext()

  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>
              </Toolbar>
            </Header>
            <ChatDailog />
          </> : <>
            <LoginHeader>
              <Toolbar>
              </Toolbar>
            </LoginHeader>
            <LoginDailog /></>
      }

    </Component>
  )
}

export default Messenger