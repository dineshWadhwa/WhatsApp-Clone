import React, { useState } from 'react'
import { Box } from '@mui/material';
import { Chat } from "@mui/icons-material";
import styled from '@emotion/styled';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';
import { useSelector } from 'react-redux';

const Component = styled(Box)`
height: 40px;
background-color: #ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
margin-left:auto;
& > * {
  margin-left:2px;
  padding:8px;
  color: #000;
};
& :first-child {
  font-size: 22px;
  margin-right: 8px;
  margin-top: 3px;
}
`
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%'
})

const Header = () => {
  const {user} = useSelector(_=>_.auth)
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Component>
        <Image src={user?.picture} alt='profile-pic'onClick={()=>setOpenDrawer(true)} />
        <Wrapper>
          <Chat />
          <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
      </Component>
      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  )
}

export default Header