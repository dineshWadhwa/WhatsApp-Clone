import React from 'react'
import { AppBar, Box, Toolbar, styled } from '@mui/material'
import LoginDailog from './Account/LoginDailog'
import ChatDailog from './Chat/ChatDailog'
import { useSelector } from 'react-redux'

const Header = styled(AppBar)`
height:125px;
background-color:#00A884;
box-shadow:none;
`
const LoginHeader = styled(AppBar)`
height:220px;
background-color:#00A884;
box-shadow:none;
`
const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC;
`
const Messenger = () => {
  const {user} = useSelector(_=>_.auth)

  return (
    <Component>
      {
        user?.sub ?
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