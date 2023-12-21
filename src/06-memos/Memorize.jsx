import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)
  // Si ocurre un cambio en el padre, todos los hijos se vuelven a renderizar
  // Para evitar esto, se puede usar el memo
  return (
    <>
      <h1>Counter: {<Small value={counter} />} </h1>
      <hr />

      <button 
        onClick={() => increment(1)} 
        className="btn btn-primary"
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
