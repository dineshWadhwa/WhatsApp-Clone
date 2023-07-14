import { createContext, useContext, useMemo, useState } from "react";

const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState()
  const [person, setPerson] = useState({})
  const [newMessageFlag, setNewMessageFlag] = useState(false)

  const value = useMemo(() => ({ account, setAccount, person, setPerson, newMessageFlag, setNewMessageFlag }), [account, newMessageFlag, person]);
  return (
    <AccountContext.Provider
      value={value}
    >
      {children}
    </AccountContext.Provider>
  )
}
export default AccountProvider;

export const useAccountContext = () => {
  return useContext(AccountContext)
}