import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { reset } from '../../../Redux/Slices/authSlice';
import { resetAccSlice } from '../../../Redux/Slices/accountSlice';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;
const HeaderMenu = ({ setOpenDrawer }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(null)

  const handleClose = () => setOpen(null)
  const handleOpen = (e) => setOpen(e.currentTarget)  
  
  const handleLogout = ()=>{
    dispatch(reset())
    dispatch(resetAccSlice())
    localStorage.clear()

  }

  return (<>
    <MoreVert onClick={handleOpen} />
    <Menu
      id="basic-menu"
      anchorEl={open}
      keepMounted
      open={open}
      onClose={handleClose}
      getContentAnchorE1={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <MenuOption onClick={() => { handleClose(); setOpenDrawer(true) }}>Profile</MenuOption>
      <MenuOption onClick={() => handleLogout() }>Logout</MenuOption>
    </Menu>
  </>
  )
}

export default HeaderMenu