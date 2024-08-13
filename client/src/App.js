import React from "react";
import "./App.css";
import Messenger from "./Components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

export const persistor = persistStore(store);

const App = () => {
  const clientID = "187155183731-v9st8h10261f0hokf1ov2qekjkskk6cb.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Provider store={store}>
        <PersistGate loading={"Loading..."} persistor={persistor}>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
