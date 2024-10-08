import { Dialog, Box } from '@mui/material'
import React from 'react'
import Menu from './Menu/Menu'
import EmptyChat from './chat/EmptyChat'
import styled from '@emotion/styled'
import ChatBox from './chat/ChatBox'
import { useSelector } from 'react-redux'
import { getObjectLength } from '../../Constants/function'

const Component = styled(Box)`
display:flex;
height:100%;
`
const LeftComponent = styled(Box)`
min-width:450px;
`
const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left: 1px solid rgba(0,0,0,0.14);
`
const dailogStyle = {
  height: '95%',
  width: '100%',
  margin: '20px',
  borderRadius: 0,
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
}
const ChatDailog = () => {
  const {person}=useSelector(_=>_.account)

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dailogStyle }}
      hideBackdrop={true}
      maxWidth={'md'}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {getObjectLength(person) ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  )
}

export default ChatDailog