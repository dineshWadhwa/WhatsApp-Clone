import React from 'react'
import { AppBar, Box, Toolbar, styled } from '@mui/material'
import LoginDailog from './Account/LoginDailog'

const Header = styled(AppBar)`
height:220px;
background-color:#00bfa5;
box-shadow:none;
`
const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC;
`
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDailog />
    </Component>
  )
}

export default Messenger