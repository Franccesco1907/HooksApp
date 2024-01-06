import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser }= useContext(UserContext);
  return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify(user)}
        </pre>

        <button 
          className="btn btn-primary"
          onClick={() => setUser({
            id: 1234,
            name: 'Franccesco',
            email: 'fjaimes@pucp.edu.pe'})}
        >
          Set User
        </button>
      </>
  )
}