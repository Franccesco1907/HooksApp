import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()
  console.log(inputRef)

  const onClick = () => {
    // document.querySelector('input').select()
    // console.log(inputRef.current)
    inputRef.current.select()
  }
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      // Si tenemos varios inputs, no conviene usar el querySelector
      // es mejor usar el useRef
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={onClick}
      >
        Set focus
      </button>
    </>)
}
