import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  // Memoriza la función
  // useCallback sirve para memorizar funciones
  const incrementFather = useCallback((value) => {
    console.log('incrementFather')
    // El counter está memorizado, por lo que no se vuelve a renderizar 
    // setCounter(counter + 1)
    // setCounter((c) => c + 1)
    setCounter((c) => c + value)
  }, []) // Si colocamos el counter acá, hará que cambie la dirección de memoria de la función, por lo que se volverá a renderizar 

  // const incrementFather = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
