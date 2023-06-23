import React from 'react'
import './App.css';
import Messenger from './Components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientID = '187155183731-v9st8h10261f0hokf1ov2qekjkskk6cb.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Messenger />
    </GoogleOAuthProvider>
  )
}

export default App
