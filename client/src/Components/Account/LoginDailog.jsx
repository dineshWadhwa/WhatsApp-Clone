import React from 'react'
import { Dialog, Box, styled, Typography, List, ListItem } from '@mui/material'
import { qrCodeImage } from '../Constants/data'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useAccountContext } from '../Context/AccountProvider'

const Component = styled(Box)`
display:flex;
`
const Container = styled(Box)`
padding:56px 0 56px 56px;
`
const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px 
`
const StyledList = styled(List)`
& > li {
  padding:0;
  margin-top:15px;
  font-size:18px;
  line-height:28px;
  color:#4a4a4a;
} 
`
const QrCode = styled('img')({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px '
})

const dailogStyle = {
  height: '92%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
}

const LoginDailog = () => {
  const { setAccount } = useAccountContext();
  const onLoginSuccess = (res) => {
    const decodedInfo = jwt_decode(res?.credential)
    setAccount(decodedInfo);
  }
  const onLoginError = (res) => { console.log(res); }

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dailogStyle }}
      hideBackdrop={true}
    >
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer :</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: 'relative' }}>
          <QrCode src={qrCodeImage} alt='Qr code' />
          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(50%)' }}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDailog