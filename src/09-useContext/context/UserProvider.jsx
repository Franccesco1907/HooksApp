import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 1234,
//   name: 'Franccesco',
//   email: 'fjaimes@idat.edu.pe'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  return (
    // <UserContext.Provider value={{hola: 'mundo', user}}>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
