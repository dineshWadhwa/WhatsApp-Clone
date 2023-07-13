import { createContext, useContext, useMemo, useState } from "react";

const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState()
  const [person, setPerson] = useState({})

  const value = useMemo(() => ({ account, setAccount, person, setPerson }), [account, person]);
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