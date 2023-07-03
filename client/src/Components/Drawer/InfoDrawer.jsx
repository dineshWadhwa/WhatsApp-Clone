import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import styled from '@emotion/styled';
import Profile from './Profile';

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 16px;
`
const drawerStyle = {
  left: 20,
  top: 21,
  height: '94.7%',
  width: '26.4%',
  boxShadow: 'none'
}
const InfoDrawer = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpenDrawer(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>{<Profile />}</Component>
    </Drawer>
  )
}

export default InfoDrawer
